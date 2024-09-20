import React from 'react';
import s from './NewProduct.module.css'
import {Header} from "../../../Header/Header";
import {CustomTitle} from "../../../../components/CustomTitle";
import load from '../../../../images/UploadImage.svg'
import {CustomImage} from "../../../../components/CustomImage";
import {CustomButton} from "../../../../components/CustomButton";
import {CustomText} from "../../../../components/CustomText";
import {CustomInput} from "../../../../components/CustomInput";

export const NewProduct = () => {
    return (
        <div>
            <Header/>
            <div className={s.container}>
                <CustomTitle order={3}>Create new product</CustomTitle>
                <div className={s.imageContainer}>
                    <CustomImage src={load}/>
                    <CustomButton variant="outline" color="gray">Upload Photo</CustomButton>
                </div>
                <div className={s.inputsContainer}>
                    <CustomText fw={700}>Title of the product</CustomText>
                    <CustomInput placeholder={'Enter title of the product...'}/>

                    <CustomText fw={700}>Price</CustomText>
                    <CustomInput placeholder={'Enter price of the product'}/>
                    <div className={s.uploadButton}>
                        <CustomButton>Upload Product</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};