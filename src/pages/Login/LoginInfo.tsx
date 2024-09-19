import React from 'react';
import s from "./Login.module.css";
import {CustomImage} from "../../components/CustomImage";
import {CustomTitle} from "../../components/CustomTitle";
import itemCard1 from "../../images/item-1.svg";
import shop from "../../images/Shop.svg";
import itemCard2 from "../../images/item-2.svg";
import {CustomText} from "../../components/CustomText";
import avatarsGroup from "../../images/Avatar-group-stacked.svg";
import {Logo} from "../../components/logo/Logo";

export const LoginInfo = () => {
    return (
        <div className={s.Info}>
            <Logo/>

            <div className={s.mainImageContainer}>
                <CustomImage src={itemCard1} className={s.leftImage}/>
                <CustomImage src={shop} className={s.mainImage}/>
                <CustomImage src={itemCard2} className={s.rightImage}/>
            </div>

            <CustomTitle>Sell and buy products super quickly!</CustomTitle>
            <CustomText style={{marginBottom: '30px'}}>Save your time, we take care of all the
                processing.</CustomText>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <CustomImage src={avatarsGroup} className={s.groupImage}/>
                <CustomText><b>+100</b> users from all over the world</CustomText>
            </div>
        </div>
    );
};