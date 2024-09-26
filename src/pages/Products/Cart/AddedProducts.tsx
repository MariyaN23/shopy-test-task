import React from 'react';
import {NoProducts} from "../NoProduct/NoProducts";
import {ProductsTable} from "./ProductsTable";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {CustomButton} from "../../../components/CustomButton";
import s from './Cart.module.css'
import {useSelector} from "react-redux";
import {selectItemsInCart, selectTotalPrice} from "../../../redux/cart/cartSelector";
import {api} from "../../../api/api";
import {ProductWithCount} from "../../../redux/cart/cartReducer";

export const AddedProducts = () => {
    const itemsInCart: ProductWithCount[] = useSelector(selectItemsInCart)
    const totalPrice = useSelector(selectTotalPrice)
    const goToCheckout = () => {
        console.log(itemsInCart)
        api.stripe(itemsInCart)
    }
    return (
        itemsInCart.length
            ? <div style={{display: 'flex', gap: '200px'}}>
                <ProductsTable addedProducts={itemsInCart}/>
                <div className={s.total}>
                    <CustomTitle order={3}>Summary</CustomTitle>
                    <div className={s.price}>
                        <CustomText>Total price</CustomText>
                        <CustomText fw={700}>{`$${totalPrice}`}</CustomText>
                    </div>
                    <div>
                        <CustomButton fullWidth style={{marginTop: '20px'}} onClick={goToCheckout}>
                            Proceed to Checkout
                        </CustomButton>
                    </div>
                </div>
            </div>
            : <div style={{display: 'flex', justifyContent: 'center'}}>
                <NoProducts/>
            </div>
    );
};