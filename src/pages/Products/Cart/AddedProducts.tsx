import React from 'react';
import {NoProducts} from "../NoProduct/NoProducts";
import {ProductsTable} from "./ProductsTable";
import {Product} from "../ProductCard/ProductCard";
import img5 from "../../../images/products/product5.svg";
import img2 from "../../../images/products/product2.svg";
import img4 from "../../../images/products/product4.svg";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {CustomButton} from "../../../components/CustomButton";
import s from './Cart.module.css'

const addedProducts: Product[] = [
    {id: 5, name: 'DJI Pocket 2 Creator Combo', price: '499', image: img5},
    {id: 2, name: 'DJI Osmo Action 4', price: '499', image: img2},
    {id: 4, name: 'DJI Mini 3 Pro', price: '909', image: img4},
]

export const AddedProducts = () => {
    return (
        addedProducts.length
            ? <div style={{display: 'flex', gap: '200px'}}>
                <ProductsTable addedProducts={addedProducts}/>
                <div className={s.total}>
                    <CustomTitle order={3}>Summary</CustomTitle>
                    <div className={s.price}>
                        <CustomText>Total price</CustomText>
                        <CustomText fw={700}>$1927</CustomText>
                    </div>
                    <CustomButton fullWidth>Proceed to Checkout</CustomButton>
                </div>
            </div>
            : <div style={{display: 'flex', justifyContent: 'center'}}>
                <NoProducts/>
            </div>
    );
};