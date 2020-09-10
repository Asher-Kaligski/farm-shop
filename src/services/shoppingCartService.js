import http from "./httpService";

const apiEndpoint = "/shoppingCarts";
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
export async function getCartById(cartID) {

    const { data: shoppingCart } = await http.get(apiEndpoint + '/' + cartId);

    return shoppingCart;
}


export async function getAll() {

    const { data: products } = await http.get(apiEndpoint);

    return products;
}

async function getOrCreateCartId() {
    const cartId = this.localStorage.get(SHOPPING_CART_ID);
    if (cartId) {
        return cartId;
    }

    const shoppingCart = await create();


    this.localStorage.set(SHOPPING_CART_ID, shoppingCart._id);

    return shoppingCart._id;
}



export default {
    create,
    getCart,
    getCartById
};
