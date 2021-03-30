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
  define: {
    'process.env.API_ORIGIN': 'https://warehouse.sellyims.net',
    'process.env.BRANDS_ENDPOINT': '/admin/brands',
    'process.env.TOKEN':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkYTZmMWM2MjBjY2VmNDUzMjM0N2EiLCJleHAiOjE2MzI2NDA4MzEsImlzUm9vdCI6dHJ1ZSwibmFtZSI6Ik5hbSBIUSIsInBhcnRuZXIiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJwZXJtaXNzaW9ucyI6W10sInBob25lIjoiKzg0OTM0ODcxNjI3IiwidHlwZSI6ImltcyIsInVzZXIiOiI2MDVkYTZhM2E0NTM5MWViNWExNWQ4YTEifQ.YQk8glazXhYgrZXqwJnnCMWER9QD-EJD9dFhX2CxR5I',
  },
});
