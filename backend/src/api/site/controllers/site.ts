/*****
 * site controller
 */

import { factories } from '@strapi/strapi';
import redis from '../../../utils/redis';

export default factories.createCoreController('api::site.site', ({ strapi }) => ({
    async find(ctx) {
        const filters = ctx.query?.filters || {};
        const filterKey = JSON.stringify(filters);
        const cacheKey = `site:filters:${filterKey}`;
      
        const cached = await redis.get(cacheKey);
        if (cached) {
          console.log('[Redis] Cache HIT →', cacheKey);
          return JSON.parse(cached);
        }
      
        console.log('[Redis] Cache MISS →', cacheKey);
      
        const data = await strapi.entityService.findMany('api::site.site', {
          filters,
          status: 'published'
        });
      
        await redis.set(cacheKey, JSON.stringify(data), 'EX', 3600);
        return data;
    },
    async findOne(ctx) {
        const slug = ctx.params.slug;
        const cacheKey = `site:slug:${slug}`;
        
        const cached = await redis.get(cacheKey);
        if (cached) {
            console.log('[Redis] Cache HIT'); // ✅ cached
            return JSON.parse(cached);
        }
        console.log('[Redis] Cache MISS'); // ❌ not cached

        const [ data ] = await strapi.entityService.findMany('api::site.site', {
            filters: { slug },
            status: 'published',
            populate: { pieces: true },
        });
    
        if (data) {
            await redis.set(cacheKey, JSON.stringify(data), 'EX', 3600);
        }
        
        return data || null;
    }
}));