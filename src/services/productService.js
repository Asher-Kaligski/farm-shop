import http from './httpService';

const apiEndpoint = '/products';

export async function getAll() {
  const { data: products } = await http.get(apiEndpoint);

  return products;
}

export default {
  getAll,
};
