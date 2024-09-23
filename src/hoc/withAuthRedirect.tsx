import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuthorised} from "../redux/login/loginSelector";
import {path} from "../App";


export function withAuthRedirectComponent(Component: ComponentType) {
    const RedirectComponent = (props: any) => {
        const isAuthorised = useSelector(selectIsAuthorised)
        if (!isAuthorised) return <Navigate to={path.signIn} replace={true}/>
        return <Component {...props}/>
    }
    return RedirectComponent
}