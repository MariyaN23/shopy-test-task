import React, {useEffect} from 'react';
import {Logo} from "../../components/logo/Logo";
import s from './Header.module.css'
import {CustomButton} from "../../components/CustomButton";
import {CustomImage} from "../../components/CustomImage";
import cartImg from '../../images/Cart.svg'
import logoutButton from '../../images/Logout.svg'
import {MantineProvider} from "@mantine/core";
import {variantColorResolver} from "../../mantine/variantColorResolver";
import {path} from "../../App";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useActions} from "../../redux/useActions";
import {loginActions} from "../../redux/login";
import {useSelector} from "react-redux";
import {selectIsAuthorised, selectUsersId} from "../../redux/login/loginSelector";
import {selectCart, selectItemsInCart} from "../../redux/cart/cartSelector";
import {cartActions} from "../../redux/cart";
import {historyActions} from "../../redux/history";

export const Header = () => {
    const id = useSelector(selectUsersId)

    const itemsInCart = useSelector(selectItemsInCart)
    const cart = useSelector(selectCart)
    const {fetchCartData, setDataToCart} = useActions(cartActions)

    const {logout} = useActions(loginActions)
    const isAuthorised = useSelector(selectIsAuthorised)
    const { isMe} = useActions(loginActions)

    const {getHistory} = useActions(historyActions)

    const current = useLocation()
    const navigate = useNavigate()

    const logoutHandler = () => {
        logout()
        navigate(path.signIn)
    }

    useEffect(() => {
        isMe()
        if (!isAuthorised) {
            navigate(path.signIn)
        } else {
            if (id) {
                fetchCartData(id)
                getHistory(id)
            }
        }
    }, [isAuthorised])

    useEffect(() => {
        if (id && cart.itemsInCart.length) {
            setDataToCart({
                userId: id,
                itemsInCart: cart.itemsInCart,
                totalPrice: cart.totalPrice
            })
        }
    }, [cart])

    return (
        <div className={s.header}>
            <Logo/>
            <div className={s.ProductButtonsContainer}>
                <MantineProvider theme={{variantColorResolver}}>
                    <NavLink to={path.allProducts}>
                        <CustomButton className={current.pathname === '/products' ? s.visitedPage : ''}
                                      variant="transparent" color="gray" radius={'lg'}>Marketplace</CustomButton>
                    </NavLink>
                    <NavLink to={path.userProducts}>
                        <CustomButton className={current.pathname === '/user/products' ? s.visitedPage : ''}
                                      variant="transparent" color="gray" radius={'lg'}>Your Products</CustomButton>
                    </NavLink>
                </MantineProvider>
            </div>
            <div className={s.ProductButtonsContainer}>
                <NavLink to={path.myCart} className={s.cart}>
                    <CustomButton variant="transparent">
                        <CustomImage src={cartImg}/>
                        <span className={itemsInCart.length ? s.cartCount : s.hideCount}>{itemsInCart.length}</span>
                    </CustomButton>
                </NavLink>
                <NavLink to={path.logout}>
                    <CustomButton variant="transparent" onClick={logoutHandler}><CustomImage
                        src={logoutButton}/></CustomButton>
                </NavLink>
            </div>
        </div>
    );
};