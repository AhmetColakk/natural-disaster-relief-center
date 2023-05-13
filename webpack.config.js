import { GenerateSW } from 'workbox-webpack-plugin';
module.exports = {
  // ...
  plugins: [
    new GenerateSW({
      // your configuration goes here
      runtimeCaching: [
        {
          urlPattern: /\.css$/,
          handler: 'CacheFirst',
        },
        {
          urlPattern: /\.html$/,
          handler: 'NetworkFirst',
        },
        {
          urlPattern: /\.js$/,
          handler: 'NetworkFirst',
        },
        {
          urlPattern: /\.(png|jpg|jpeg|gif|svg)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
          },
        },
      ],
    }),
  ],
};
