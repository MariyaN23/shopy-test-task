import React from 'react';
import {Header} from "../../Header/Header";
import s from "../Cart/Cart.module.css";
import {CustomImage} from "../../../components/CustomImage";
import failed from "../../../images/CrossMark.svg";
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import {NavLink} from "react-router-dom";
import {path} from "../../../App";
import {CustomButton} from "../../../components/CustomButton";

export const PaymentFailed = () => {
    return (
        <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
                <div className={s.imageAndText}>
                    <CustomImage style={{width: '55px', height: '55px'}} src={failed}/>
                    <CustomTitle order={3}>Payment Failed</CustomTitle>
                    <CustomText c="dimmed" children={`Sorry, your payment failed.`}/>
                    <CustomText c="dimmed" children={`Would you like to try again?`}/>
                    <NavLink to={path.myCart}>
                        <CustomButton>Back to Cart</CustomButton>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};