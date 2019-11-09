module.exports = {
  siteName: 'Brayckner Media',
  siteUrl: 'https://braycknermedia.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  plugins: [
    { use: 'gridsome-plugin-pug' },
    { use: 'gridsome-plugin-tailwindcss' },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-TXV7S5P',
        enabled: true
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // cacheTime: 600000,
        // exclude: [],
        // config: {
        //   '/about': {
        //     changefreq: 'monthly',
        //     priority: 0.7
        //   }
        // }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'netlify/blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug'
      }
    }
  ]
}
