import axios from 'axios';
import {ProductType} from "../redux/products/productsReduces";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const api = {
    getProducts(min: string, max: string, name: string, page: number) {
        return instance.get<{products: ProductType[], total: number}>(`products?min=${min}&max=${max}&name=${name}&page=${page}`)
    },
    getAllUsersProducts(userId: number) {
        return instance.get<ProductType[]>(`products/${userId}`)
    },
    addProduct(product: ProductType) {
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
}