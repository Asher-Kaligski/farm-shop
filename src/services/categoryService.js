import http from './httpService';

const apiEndpoint = '/categories';

export async function getAll() {
  const { data: products } = await http.get(apiEndpoint);

  return products;
}

export default {
  getAll,
};
