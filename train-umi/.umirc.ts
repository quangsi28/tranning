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
          title: 'Thương hiệu',
        },
        { path: '/other', component: '@/pages/brands/brands', title: 'Khác' },
      ],
    },
  ],
  fastRefresh: {},
});
