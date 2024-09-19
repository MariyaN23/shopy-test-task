import React from 'react';
import {Header} from "../../Header/Header";
import {CustomButton} from "../../../components/CustomButton";
import {AddedProducts} from "./AddedProducts";
import {path} from "../../../App";
import {NavLink} from "react-router-dom";

export const Cart = () => {
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