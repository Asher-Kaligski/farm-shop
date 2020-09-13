import http from "./httpService";
import authService from "./authService";

const SHOPPING_CART_ID = 'SHOPPING_CART_ID';

const apiEndpoint = "/orders";


export async function getAll() {

    const { data: orders } = await http.get(apiEndpoint);

    return orders;
}

export async function placeOrder(shipping) {


    const customerId = authService.getCurrentUser()._id;
    const shoppingCartId = localStorage.getItem(SHOPPING_CART_ID);

    const order = { shipping, customerId, shoppingCartId };

    const { data: result } = await http.post(apiEndpoint, order);

    localStorage.removeItem(SHOPPING_CART_ID);

    return result;

}


export default {
    getAll,
    placeOrder
};