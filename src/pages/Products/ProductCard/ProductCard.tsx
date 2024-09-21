import React from 'react';
import {CustomImage} from "../../../components/CustomImage";
import s from './ProductCard.module.css'
import {CustomText} from "../../../components/CustomText";
import {CustomButton} from "../../../components/CustomButton";
import {ProductType} from "../../../redux/products/productsReduces";

type ProductCardType = {
    product: ProductType
}

export const ProductCard = (props: ProductCardType) => {
    return (
        <div className={s.ProductCard}>
            <CustomImage src={props.product.image}/>
            <div className={s.info}>
                <CustomText children={props.product.name} fw={600}/>
                <div className={s.price}>
                    <CustomText children={'Price:'} fw={300}/>
                    <CustomText children={`$${props.product.price}`} fw={600}/>
                </div>
                <div className={s.addButton}>
                    <CustomButton fullWidth>Add to Cart</CustomButton>
                </div>
            </div>
        </div>
    );
};