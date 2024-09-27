import axios from 'axios';
import {ProductType} from "../redux/products/productsReduces";
import {newProductType} from "../redux/products/productsActions";
import {ProductWithCount} from "../redux/cart/cartReducer";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const api = {
    getProducts(min: string, max: string, name: string, page: number, order: 'asc' | 'desc') {
        return instance.get<{products: ProductType[], total: number}>(`products?min=${min}&max=${max}&name=${name}&page=${page}&order=${order}`)
    },
    getAllUsersProducts(userId: number) {
        return instance.get<ProductType[]>(`products/${userId}`)
    },
   deleteUserProduct(productId: number) {
        return instance.delete<ProductType>(`products/${productId}`)
    },
    addProduct(product: newProductType) {
        return instance.post<ProductType>('products', product)
    },
    login(email: string, password: string) {
        return instance.post('auth/login', {username: email, password})
    },
    registration(email: string, password: string) {
        return instance.post('auth/registration', {username: email, password})
    },
    logout() {
        return instance.delete('auth/logout')
    },
    getCartData(userId: number) {
        return instance.get(`/cart/${userId}`)
    },
    postDataToCart(userId: number, itemsInCart: ProductWithCount[], totalPrice: number) {
        return instance.post(`/cart/${userId}`, {itemsInCart, totalPrice})
    }
}