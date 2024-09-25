import React from 'react';
import s from '../ProductCard/ProductCard.module.css'
import {ProductType} from "../../../redux/products/productsReduces";
import {ProductCard} from "../ProductCard/ProductCard";


type FoundProductsType = {
    products: ProductType[]
}

export const FoundProducts = (props: FoundProductsType) => {
    return (
        <div className={s.allProducts}>
            {props.products.map((product: ProductType, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};