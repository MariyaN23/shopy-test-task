import React, {useEffect} from 'react';
import {Header} from "../../Header/Header";
import {CustomButton} from "../../../components/CustomButton";
import {AddedProducts} from "./AddedProducts";
import {path} from "../../../App";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCart} from "../../../redux/cart/cartSelector";
import {selectUsersId} from "../../../redux/login/loginSelector";
import {useActions} from "../../../redux/useActions";
import {cartActions} from "../../../redux/cart";

export const Cart = () => {
    const cart = useSelector(selectCart)
    const id = useSelector(selectUsersId)
    const { setDataToCart} = useActions(cartActions)
    useEffect(() => {
        if (id) {
            setDataToCart({
                userId: id,
                itemsInCart: cart.itemsInCart,
                totalPrice: cart.totalPrice
            })
        }
    }, [cart])
    return (
        <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
            <Header/>
            <div>
                <NavLink to={path.myCart}>
                    <CustomButton variant="transparent" color="black" size="xl">My cart</CustomButton>
                </NavLink>
                <NavLink to={path.history}>
                    <CustomButton variant="transparent" color="gray" size="xl">History</CustomButton>
                </NavLink>
            </div>
            <AddedProducts/>
        </div>
    );
};