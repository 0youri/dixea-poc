import redis from '../../../../utils/redis';

export default {
  async afterUpdate(event) {
    const { result } = event;
    const slug = result.slug;
    const key = `site:slug:${slug}`;
    await redis.del(key, 'site:filters:{}');
    console.log(`[Redis] Cache cleared → ${key} + site:filters:{}`);
  },

  async afterDelete(event) {
    const { result } = event;
    const slug = result.slug;
    const key = `site:slug:${slug}`;
    await redis.del(key, 'site:filters:{}');
    console.log(`[Redis] Cache cleared → ${key} + site:filters:{}`);
  },

  async afterCreate(event) {
    const key = 'site:filters:{}';
    await redis.del(key);
    console.log(`[Redis] Cache cleared → ${key}`);
  },
};