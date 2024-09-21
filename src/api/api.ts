import axios from 'axios';
import {ProductType} from "../redux/products/productsReduces";


export const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const api = {
    getProducts() {
        return instance.get<ProductType[]>('products')
    },
    addProduct(product: ProductType) {
        return instance.post<ProductType>('products', product)
    }
}