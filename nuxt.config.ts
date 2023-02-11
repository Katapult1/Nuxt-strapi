// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    },
  },
}) 
// export default ({

  
//     modules: ['@nuxtjs/strapi'],
//     strapi: {
//         url: process.env.STRAPI_URL || 'http://localhost:1337',
//         prefix: '/api',
//         version: 'v4',
//         cookie: {},
//         cookieName: 'strapi_jwt'
//       }

// })
