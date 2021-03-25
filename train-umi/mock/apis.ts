const brand = {
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true,
};

export default {
  // Support values ​​are Object and Array
  'GET /api/brands': { data: [brand, brand] },
};
