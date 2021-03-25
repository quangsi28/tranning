const brands = [
  {
    id: '1',
    name: 'john',
    active: true,
    createdAt: '2021-03-24T02:48:49.026Z',
  },
  {
    id: '3',
    name: 'john2',
    active: true,
    createdAt: '2021-03-24T02:48:49.026Z',
  },
  {
    id: '2',
    name: 'john3',
    active: false,
    createdAt: '2021-03-24T02:48:49.026Z',
  },
];

export default {
  // Support values ​​are Object and Array
  'GET /api/brands': { data: brands },
};
