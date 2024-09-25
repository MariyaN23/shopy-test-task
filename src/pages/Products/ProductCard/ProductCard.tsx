import React, {useState} from 'react';
import {CustomImage} from "../../../components/CustomImage";
import s from './ProductCard.module.css'
import {CustomText} from "../../../components/CustomText";
import {CustomButton} from "../../../components/CustomButton";
import {ProductType} from "../../../redux/products/productsReduces";
import {useDispatch} from "react-redux";
import {setItemInCart} from "../../../redux/cart/cartReducer";

type ProductCardType = {
    product: ProductType
}

export const ProductCard = (props: ProductCardType) => {
    const [disableButton, setDisableButton] = useState(false)
    const dispatch = useDispatch()
    const addProductToCart = (product: ProductType) => {
        dispatch(setItemInCart(product))
        setDisableButton(true)
    }
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
                    <CustomButton disabled={disableButton} fullWidth onClick={() => addProductToCart(props.product)}>
                        {disableButton ? "Product in cart" : "Add to Cart"}</CustomButton>
                </div>
            </div>
        </div>
    );
};