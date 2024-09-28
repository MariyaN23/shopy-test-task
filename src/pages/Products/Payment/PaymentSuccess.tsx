import React, {useEffect} from 'react';
import s from "../Cart/Cart.module.css";
import {CustomImage} from "../../../components/CustomImage";
import success from "../../../images/PartyPopper.svg";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {NavLink} from "react-router-dom";
import {path} from "../../../App";
import {CustomButton} from "../../../components/CustomButton";
import {Header} from "../../Header/Header";
import {useSelector} from "react-redux";
import {selectCart} from "../../../redux/cart/cartSelector";
import {selectUsersId} from "../../../redux/login/loginSelector";
import {useActions} from "../../../redux/useActions";
import {cartActions} from "../../../redux/cart";
import {loginActions} from "../../../redux/login";

export const PaymentSuccess = () => {
    const cart = useSelector(selectCart)
    const id = useSelector(selectUsersId)
    const { setDataToCart} = useActions(cartActions)
    useEffect(() => {
        if (id && cart.itemsInCart.length) {
            setDataToCart({
                userId: id,
                itemsInCart: [],
                totalPrice: 0
            })
        }
    }, [])
    return (
        <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
            <Header/>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
                <div className={s.imageAndText}>
                    <CustomImage style={{width: '55px', height: '55px'}} src={success}/>
                    <CustomTitle order={3}>Payment Successful</CustomTitle>
                    <CustomText c="dimmed" children={`Hooray, you have completed your payment!`}/>
                    <NavLink to={path.myCart}>
                        <CustomButton>Back to Cart</CustomButton>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};