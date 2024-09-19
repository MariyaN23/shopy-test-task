import React from 'react';
import {Product, ProductCard} from "../ProductCard/ProductCard";
import img1 from '../../../images/products/product1.svg'
import img2 from '../../../images/products/product2.svg'
import img3 from '../../../images/products/product3.svg'
import img4 from '../../../images/products/product4.svg'
import img5 from '../../../images/products/product5.svg'
import img6 from '../../../images/products/product6.svg'
import s from '../ProductCard/ProductCard.module.css'

const products: Product[] = [
    {id: 1, name: 'DJI Air 3', price: '1,549', image: img1},
    {id: 2, name: 'DJI Osmo Action 4', price: '499', image: img2},
    {id: 3, name: 'DJI Mini 3 Pro (DJI RC)', price: '1158', image: img3},
    {id: 4, name: 'DJI Mini 3 Pro', price: '909', image: img4},
    {id: 5, name: 'DJI Pocket 2 Creator Combo', price: '499', image: img5},
    {id: 6, name: 'DJI RS 3', price: '549', image: img6},
]

export const FoundProducts = () => {
    return (
        <div className={s.allProducts}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};