import { RequestConfig } from 'umi';
// index.js
import microApp from '@micro-zoe/micro-app';

export function patchRoutes({ routes }) {
  const extraRoutes = [
    {
      name: '/app-react17',
      url: 'http://nextjs11.micro-zoe.com/app-react17#/',
      baseRoute: '/app-react17',
    },
  ].map((item: TMicroRouteConfig) => {
    const { name, url, baseRoute } = item;
    return {
      path: `${baseRoute}`,
      component: () => {
        return (
          <micro-app
            name={name} // name(必传)：应用名称
            url={url}
            baseroute={baseRoute} // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
          ></micro-app>
        );
      },
    };
  });

  routes.push(...extraRoutes);

  console.log('当前所有路由:', routes);
}

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
