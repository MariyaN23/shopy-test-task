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
            <div style={{margin: '20px'}}>
                <CustomTitle order={3}>Your Products</CustomTitle>
                <div style={{display: 'flex'}}>
                    <div className={s.addNewProduct}>
                        <NavLink to={path.newProduct}>
                            <CustomImage src={add}/>
                            <CustomButton variant="transparent" size="xl">New Product</CustomButton>
                        </NavLink>
                    </div>

                    <AllUsersProducts/>
                </div>
            </div>
        </div>
    );
};