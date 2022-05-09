import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // { path: '/app-react17', component: '@/pages/microAppTest' },
  ],
  fastRefresh: {},
  layout: {},
});
