import http from './httpService';

const apiEndpoint = '/shoppingCarts';
const SHOPPING_CART_ID = 'SHOPPING_CART_ID';

export async function create() {
  const { data: shoppingCart } = await http.post(apiEndpoint, { items: [] });

  return shoppingCart;
}

export async function getCart() {
  const cartId = await getOrCreateCartId();
  const { data: shoppingCart } = await http.get(apiEndpoint + '/' + cartId);

  return shoppingCart;
}
export async function getCartById(cartId) {
  const { data: shoppingCart } = await http.get(apiEndpoint + '/' + cartId);

  return shoppingCart;
}

export async function getAll() {
  const { data: products } = await http.get(apiEndpoint);

  return products;
}

async function getOrCreateCartId() {
  const cartId = localStorage.getItem(SHOPPING_CART_ID);
  if (cartId) {
    return cartId;
  }

  const shoppingCart = await create();

  localStorage.setItem(SHOPPING_CART_ID, shoppingCart._id);

  return shoppingCart._id;
}

export async function updateCart(items) {
  const cartId = await getOrCreateCartId();

  const shoppingCart = await http.patch(apiEndpoint + '/' + cartId, items);
  return shoppingCart;
}

export default {
  create,
  getCart,
  getCartById,
  updateCart,
};
