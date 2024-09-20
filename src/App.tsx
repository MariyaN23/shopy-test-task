import React from 'react';
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {theme} from "./mantine/mantine";
import {Navigate, Route, Routes} from "react-router-dom";
import {SignUpPage} from "./pages/Login/signup/SignUpPage";
import {SingInPage} from "./pages/Login/signin/SingInPage";
import {Products} from "./pages/Products/Products-shop/Products";
import {Cart} from "./pages/Products/Cart/Cart";
import {History} from "./pages/Products/History/History";
import {PaymentSuccess} from "./pages/Products/Payment/PaymentSuccess";
import {PaymentFailed} from "./pages/Products/Payment/PaymentFailed";
import {Error} from "./pages/Error/Error";
import {UserProducts} from "./pages/Products/User-products/UserProducts";
import {NewProduct} from "./pages/Products/User-products/NewProduct/NewProduct";

export const path = {
    signIn: '/signin',
    signUp: '/signup',
    allProducts: '/products',
    myCart: '/cart',
    history: '/cart/history',
    paymentSuccess: '/payment/success',
    paymentFailed: '/payment/failed',
    userProducts: '/user/products',
    newProduct: '/user/products/new'
} as const;

function App() {
    return (
        <MantineProvider theme={theme}>
            <Routes>
                <Route path={'/'} element={<Navigate to={path.signUp}/>}/>
                <Route path={path.signUp} element={<SignUpPage/>}/>
                <Route path={path.signIn} element={<SingInPage/>}/>
                <Route path={path.allProducts} element={<Products/>}/>
                <Route path={path.myCart} element={<Cart/>}/>
                <Route path={path.history} element={<History/>}/>
                <Route path={path.paymentSuccess} element={<PaymentSuccess/>}/>
                <Route path={path.paymentFailed} element={<PaymentFailed/>}/>
                <Route path={path.userProducts} element={<UserProducts/>}/>
                <Route path={path.newProduct} element={<NewProduct/>}/>
                <Route path={'/*'} element={<Error/>}/>
            </Routes>
        </MantineProvider>
    );
}

export default App;
