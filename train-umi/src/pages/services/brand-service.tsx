import axios from 'axios';
import { Brand } from '../brands/models/brand';

const brandAPIUrl = `${process.env.API_ORIGIN}${process.env.BRANDS_ENDPOINT}`;

export function getBrandList(
  limit: number,
  page: number,
  active?: boolean[],
  keyword?: string,
) {
  return axios.get(brandAPIUrl, {
    params: {
      limit,
      page,
      active: active?.join(', '),
      keyword,
    },
    headers: {
      Authorization: 'Bearer ' + process.env.TOKEN,
    },
  });
}

export function requestCreateBrand(name: string) {
  return axios.post(
    brandAPIUrl,
    {
      name,
    },
    {
      headers: {
        Authorization: 'Bearer ' + process.env.TOKEN,
      },
    },
  );
}

export function updateBrandStatus(brandId: string) {
  return axios.patch(brandAPIUrl + '/' + brandId + '/status', null, {
    headers: {
      Authorization: 'Bearer ' + process.env.TOKEN,
    },
  });
}

export function requestUpdateBrand(brand: Brand) {
  return axios.put(
    brandAPIUrl + '/' + brand._id,
    { name: brand.name },
    {
      headers: {
        Authorization: 'Bearer ' + process.env.TOKEN,
      },
    },
  );
}
