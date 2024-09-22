import React, {useRef} from 'react';
import {Logo} from "../../components/logo/Logo";
import s from './Header.module.css'
import {CustomButton} from "../../components/CustomButton";
import {CustomImage} from "../../components/CustomImage";
import cart from '../../images/Cart.svg'
import logout from '../../images/Logout.svg'
import {MantineProvider} from "@mantine/core";
import {variantColorResolver} from "../../mantine/variantColorResolver";
import {path} from "../../App";
import {NavLink, useLocation} from "react-router-dom";

export const Header = () => {
    const current = useLocation()
    console.log(current)
    return (
        <div className={s.header}>
            <Logo/>
            <div className={s.ProductButtonsContainer}>
                <MantineProvider theme={{variantColorResolver}}>
                    <NavLink to={path.allProducts}>
                        <CustomButton className={current.pathname ==='/products' ? s.visitedPage : ''} variant="transparent" color="gray" radius={'lg'}>Marketplace</CustomButton>
                    </NavLink>
                    <NavLink to={path.userProducts}>
                        <CustomButton className={current.pathname ==='/user/products' ? s.visitedPage : ''}variant="transparent" color="gray" radius={'lg'}>Your Products</CustomButton>
                    </NavLink>
                </MantineProvider>
            </div>
            <div className={s.ProductButtonsContainer}>
                <NavLink to={path.myCart}>
                    <CustomButton variant="transparent"><CustomImage src={cart}/>
                    </CustomButton>
                </NavLink>
                <NavLink to={path.signIn}>
                    <CustomButton variant="transparent"><CustomImage src={logout}/></CustomButton>
                </NavLink>
            </div>
        </div>
    );
};