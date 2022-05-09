export default () => {
  return (
    <div>
      <micro-app
        name="app-react17" // name(必传)：应用名称
        url="http://nextjs11.micro-zoe.com/app-react17#/"
        baseroute="/app-react17" // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
      ></micro-app>
    </div>
  );
};
