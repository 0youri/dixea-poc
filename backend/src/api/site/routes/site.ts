/**
 * site router
 */

import { factories } from '@strapi/strapi';

export default {
    routes: [
      {
        method: 'GET',
        path: '/sites/:slug',
        handler: 'site.findOne',
        config: {
          auth: false,
        },
      },

    ],
  };