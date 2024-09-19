import {SignUpComponent} from "./SignUpComponent";
import {LoginInfo} from "../LoginInfo";
import s from "../Login.module.css";

export const SignUpPage = () => {
    return (
        <div className={s.signUp}>
            <div className={s.formWrapper}>
                <SignUpComponent/>
            </div>
            <LoginInfo/>
        </div>
    );
};