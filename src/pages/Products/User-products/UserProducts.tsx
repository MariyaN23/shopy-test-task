import React from 'react';
import {Header} from "../../Header/Header";
import {CustomTitle} from "../../../components/CustomTitle";
import {AllUsersProducts} from "./AllUsersProducts";
import {NavLink} from "react-router-dom";
import {path} from "../../../App";
import s from "./UserProducts.module.css";
import {CustomImage} from "../../../components/CustomImage";
import add from "../../../images/PlusCircle.svg";
import {CustomButton} from "../../../components/CustomButton";

export const UserProducts = () => {
    return (
        <div>
            <Header/>
            <CustomTitle order={3}>Your Products</CustomTitle>
            <NavLink to={path.newProduct}>
                <div className={s.addNewProduct}>
                    <CustomImage src={add}/>
                    <CustomButton variant="transparent" size="xl">New Product</CustomButton>
                </div>
            </NavLink>
            <AllUsersProducts/>
        </div>
    );
};