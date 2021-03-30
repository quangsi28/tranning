import axios from 'axios';
import { Brand } from '../brands/models/brand';

export function getBrandList(
  limit: number,
  page: number,
  active?: boolean[],
  keyword?: string,
) {
  return axios.get(API_ORIGIN + BRANDS_ENDPOINT, {
    params: {
      limit,
      page,
      active: active?.join(', '),
      keyword,
    },
    headers: {
      Authorization: 'Bearer ' + TOKEN,
    },
  });
}

export function requestCreateBrand(name: string) {
  return axios.post(
    API_ORIGIN + BRANDS_ENDPOINT,
    {
      name,
    },
    {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    },
  );
}

export function updateBrandStatus(brandId: string) {
  return axios.patch(
    API_ORIGIN + BRANDS_ENDPOINT + '/' + brandId + '/status',
    null,
    {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    },
  );
}

export function requestUpdateBrand(brand: Brand) {
  return axios.put(
    API_ORIGIN + BRANDS_ENDPOINT + '/' + brand._id,
    { name: brand.name },
    {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    },
  );
}
