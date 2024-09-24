import {SignUpComponent} from "./SignUpComponent";
import {LoginInfo} from "../LoginInfo";
import s from "../Login.module.css";
import {useSelector} from "react-redux";
import {selectIsAuthorised} from "../../../redux/login/loginSelector";
import {Navigate} from "react-router-dom";
import {path} from "../../../App";
import React from "react";

export const SignUpPage = () => {
    const isAuthorised = useSelector(selectIsAuthorised)
    return isAuthorised ? <Navigate to={path.userProducts}/>
        : <div className={s.signUp}>
            <div className={s.formWrapper}>
                <SignUpComponent/>
            </div>
            <LoginInfo/>
        </div>
};