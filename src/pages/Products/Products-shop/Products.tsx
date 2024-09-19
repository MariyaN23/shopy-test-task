import React from 'react';
import {Header} from "../../Header/Header";
import {Filters} from "./Filters";
import {CustomInput} from "../../../components/CustomInput";
import {IconSearch} from "@tabler/icons-react";
import s from './Products.module.css'
import {CustomText} from "../../../components/CustomText";
import {CustomImage} from "../../../components/CustomImage";
import {CustomButton} from "../../../components/CustomButton";
import sort from '../../../images/Swap.svg'
import arrowDown from '../../../images/arrow-down.svg'
import close from '../../../images/close-in-circle.svg'
import {FoundProducts} from "./FoundProducts";
import {CustomPagination} from "../ProductCard/CustomPagination";

export const Products = () => {
    return (
        <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
            <Header/>
            <div style={{display: 'flex'}}>
                <Filters/>
                <div className={s.searchInputContainer}>
                    <CustomInput placeholder={'Type to search...'} leftSection={<IconSearch/>}/>
                    <div className={s.sortContainer}>
                        <CustomText children={'12 results'} fw={600}/>
                        <CustomButton variant={'transparent'} color='black'>
                            <CustomImage style={{marginRight: '5px'}} src={sort}/>
                            Sort by newest
                            <CustomImage style={{marginLeft: '5px'}} src={arrowDown}/>
                        </CustomButton>
                    </div>
                    <div>
                        <CustomButton variant="outline" color="gray" radius="xl">$400-$1500
                            <CustomImage style={{marginLeft: '5px'}} src={close}/>
                        </CustomButton>
                    </div>
                    <FoundProducts/>
                    <CustomPagination/>
                </div>
            </div>
        </div>
    );
};