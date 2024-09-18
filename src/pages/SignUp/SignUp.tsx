import React from 'react';
import {CustomTitle} from "../../components/CustomTitle";
import {CustomInput} from "../../components/CustomInput";
import {CustomText} from "../../components/CustomText";
import s from './SignUp.module.css'
import {CustomPasswordInput} from "../../components/CustomPasswordInput";
import {CustomCheckbox} from "../../components/Checkbox/CustomCheckbox";
import {CustomButton} from "../../components/CustomButton";
import {CustomAnchor} from "../../components/CustomAnchor";
import {CustomImage} from "../../components/CustomImage";
import logo from "../../images/logo.svg"
import shop from "../../images/Shop.svg"
import itemCard1 from "../../images/item-1.svg"
import itemCard2 from "../../images/item-2.svg"
import avatarsGroup from "../../images/Avatar-group-stacked.svg"

export const SignUp = () => {
    return (
            <div className={s.signUp}>
                <div className={s.formWrapper}>
                    <div className={s.login}>
                        <CustomTitle order={2} style={{marginBottom: '20px'}}>Sign Up</CustomTitle>

                        <CustomText children={'Email Address'} fw={500}/>
                        <CustomInput placeholder={'Email address'} style={{marginBottom: '20px'}}/>

                        <CustomText children={'Password'} fw={500}/>
                        <CustomPasswordInput placeholder={'Enter password'} type={'password'}
                                             style={{marginBottom: '20px'}}/>

                        <div>
                            <CustomCheckbox>Must be at least 8 characters</CustomCheckbox>
                            <CustomCheckbox>Must contain at least 1 number</CustomCheckbox>
                            <CustomCheckbox>Must contain lowercase and capital letters</CustomCheckbox>
                        </div>
                        <CustomButton fullWidth style={{margin: '30px 0'}}>Create Account</CustomButton>

                        <div className={s.signIn}>
                            <CustomText children={'Have an account?'}/>
                            <CustomAnchor href={'google.com'}>Sign In</CustomAnchor>
                        </div>
                    </div>
                </div>


                <div className={s.Info}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '100px'}}>
                        <CustomImage src={logo} className={s.logo}/>
                        <CustomTitle order={2}>Shopy</CustomTitle>
                    </div>

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
            </div>
    );
};