module.exports = {
  siteName: 'Brayckner Media',
  siteUrl: 'https://braycknermedia.com',
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
    }
  ]
}
