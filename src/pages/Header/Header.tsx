import React, {useEffect} from 'react';
import {Logo} from "../../components/logo/Logo";
import s from './Header.module.css'
import {CustomButton} from "../../components/CustomButton";
import {CustomImage} from "../../components/CustomImage";
import cart from '../../images/Cart.svg'
import logoutButton from '../../images/Logout.svg'
import {MantineProvider} from "@mantine/core";
import {variantColorResolver} from "../../mantine/variantColorResolver";
import {path} from "../../App";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useActions} from "../../redux/useActions";
import {loginActions} from "../../redux/login";
import {useSelector} from "react-redux";
import {selectIsAuthorised, selectUsersId} from "../../redux/login/loginSelector";
import {selectItemsInCart} from "../../redux/cart/cartSelector";
import {cartActions} from "../../redux/cart";

export const Header = () => {
    const itemsInCart = useSelector(selectItemsInCart)
    const id = useSelector(selectUsersId)
    const {logout} = useActions(loginActions)
    const {fetchCartData} = useActions(cartActions)
    const current = useLocation()
    const navigate = useNavigate()
    const isAuthorised = useSelector(selectIsAuthorised)
    const logoutHandler = () => {
        logout()
        navigate(path.signIn)
    }
    useEffect(() => {
        if (!isAuthorised) {
            navigate(path.signIn)
        } else {
            if (id) {
                fetchCartData(id)
            }
        }
    }, [isAuthorised])

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
                        <CustomImage src={cart}/>
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