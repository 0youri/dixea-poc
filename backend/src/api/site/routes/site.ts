/**
 * site router
 */


export default {
    routes: [
      {
        method: 'GET',
        path: '/sites',
        handler: 'site.find',
        config: {
          auth: false,
        },
      },
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