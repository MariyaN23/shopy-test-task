import React from 'react';
import {NoProducts} from "../NoProduct/NoProducts";
import {ProductsTable} from "./ProductsTable";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {CustomButton} from "../../../components/CustomButton";
import s from './Cart.module.css'
import {ProductType} from "../../../redux/products/productsReduces";

const addedProducts: ProductType[] = []

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