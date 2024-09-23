import React from 'react';
import {Header} from "../../Header/Header";
import {NavLink} from "react-router-dom";
import {path} from "../../../App";
import {CustomButton} from "../../../components/CustomButton";
import {ProductsInHistory} from "./ProductsInHistory";
import {withAuthRedirectComponent} from "../../../hoc/withAuthRedirect";

export const History = withAuthRedirectComponent(() => {
    return (
        <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
            <Header/>
            <div>
                <NavLink to={path.myCart}>
                    <CustomButton variant="transparent" color="gray" size="xl">My cart</CustomButton>
                </NavLink>
                <NavLink to={path.history}>
                    <CustomButton variant="transparent" color="black" size="xl">History</CustomButton>
                </NavLink>
            </div>
            <ProductsInHistory/>
        </div>
    );
})