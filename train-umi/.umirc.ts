import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      title: '',
      routes: [
        {
          path: '/brands',
          component: '@/pages/brands/brands',
        },
        { path: '/other', component: '@/pages/brands/brands' },
      ],
    },
  ],
  fastRefresh: {},
});
