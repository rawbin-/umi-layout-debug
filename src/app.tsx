import { RequestConfig } from 'umi';
// index.js
import microApp from '@micro-zoe/micro-app';

microApp.start({
  plugins: {
    global: [
      {
        loader: (code, url, options, info) => {
          console.log('plugin loader: ', url, options, info);
          return code;
        },
      },
    ],
  },
});
