import React from 'react';
import noProducts from '../../../images/no-products.svg'
import {CustomImage} from "../../../components/CustomImage";
import s from '../Cart/Cart.module.css'
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {path} from "../../../App";
import {CustomButton} from "../../../components/CustomButton";
import {NavLink} from "react-router-dom";

export const NoProducts = () => {
    return (
        <div className={s.imageAndText}>
            <CustomImage src={noProducts}/>
            <CustomTitle order={3}>Oops, there's nothing here yet!</CustomTitle>
            <CustomText fw={300} children={`You haven't made any purchases yet.`}/>
            <CustomText fw={300} children={`Go to the marketplace and make purchases.`}/>
            <NavLink to={path.allProducts}>
                <CustomButton>Go to Marketplace</CustomButton>
            </NavLink>
        </div>
    );
};