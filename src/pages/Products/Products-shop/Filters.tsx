import React from 'react';
import {CustomTitle} from "../../../components/CustomTitle";
import {CustomText} from "../../../components/CustomText";
import s from './Products.module.css'
import {CustomInput} from "../../../components/CustomInput";
import {CustomButton} from "../../../components/CustomButton";
import resetAll from '../../../images/close.svg';
import {CustomImage} from "../../../components/CustomImage";

export const Filters = () => {
    return (
        <div className={s.filtersContainer}>
            <div className={s.resetAllFilters}>
                <CustomTitle order={3}>Filters</CustomTitle>
                <CustomButton variant="transparent" color="gray">Reset All <CustomImage src={resetAll}/></CustomButton>
            </div>
            <CustomText children={'Price'} fw={600}/>
            <div className={s.filterInputs}>
                <CustomInput placeholder={'From: '}/>
                <CustomInput placeholder={'To: '}/>
            </div>
        </div>
    );
};