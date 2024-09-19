import React from 'react';
import {Header} from "../Header/Header";
import {CustomTitle} from "../../components/CustomTitle";

export const Error = () => {
    return (
        <>
            <Header/>
            <CustomTitle order={3} style={{padding: '50px'}}>There's nothing here yet :(</CustomTitle>
        </>
    );
};