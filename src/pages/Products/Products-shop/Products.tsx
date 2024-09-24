import React, {ChangeEvent, useEffect, useState} from 'react';
import {Header} from "../../Header/Header";
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
import {useSelector} from "react-redux";
import {selectProducts} from "../../../redux/products/productsSelector";
import {useActions} from "../../../redux/useActions";
import {productsActions} from "../../../redux/products";
import {CustomTitle} from "../../../components/CustomTitle";
import resetAll from "../../../images/close.svg";

export const Products = () => {
    const allProducts = useSelector(selectProducts)
    const {getProducts} = useActions(productsActions)
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [productName, setProductName] = useState('')
    const minPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinPrice(e.currentTarget.value)
    }
    const maxPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(e.currentTarget.value)
    }
    const productNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProductName(e.currentTarget.value)
    }
    useEffect(() => {
        getProducts({min: minPrice, max: maxPrice, name: productName})
    }, [minPrice, maxPrice, productName])
    const resetAllFilters = () => {
        setMinPrice('')
        setMaxPrice('')
        setProductName('')
    }
    return (
        <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
            <Header/>
            <div style={{display: 'flex'}}>
                <div className={s.filtersContainer}>
                    <div className={s.resetAllFilters}>
                        <CustomTitle order={3}>Filters</CustomTitle>
                        <CustomButton variant="transparent"
                                      onClick={resetAllFilters}
                                      color="gray">
                            Reset All
                            <CustomImage src={resetAll}/></CustomButton>
                    </div>
                    <CustomText children={'Price'} fw={600}/>
                    <div className={s.filterInputs}>
                        <CustomInput placeholder={'From: '} value={minPrice} onChange={minPriceHandler}/>
                        <CustomInput placeholder={'To: '} value={maxPrice} onChange={maxPriceHandler}/>
                    </div>
                </div>

                <div className={s.searchInputContainer}>
                    <CustomInput placeholder={'Type to search...'}
                                 leftSection={<IconSearch/>}
                                 value={productName}
                                 onChange={productNameHandler}
                    />
                    <div className={s.sortContainer}>
                        <CustomText fw={600}>{`${allProducts.length} results`}</CustomText>
                        <CustomButton variant={'transparent'} color='black'>
                            <CustomImage style={{marginRight: '5px'}} src={sort}/>
                            Sort by newest
                            <CustomImage style={{marginLeft: '5px'}} src={arrowDown}/>
                        </CustomButton>
                    </div>
                    <div>
                        {minPrice || maxPrice ?
                            <CustomButton variant="outline" color="gray" radius="xl">
                                {minPrice && !maxPrice && `$${minPrice}`}
                                {!minPrice && maxPrice && `$${maxPrice}`}
                                {minPrice && maxPrice && `$${minPrice} - $${maxPrice}`}
                                <CustomButton variant="transparent" onClick={resetAllFilters}>
                                    <CustomImage style={{marginLeft: '5px'}} src={close}/>
                                </CustomButton>
                            </CustomButton>
                            : ''
                        }
                    </div>
                    <FoundProducts products={allProducts}/>
                    <CustomPagination resultLength={allProducts.length}/>
                </div>
            </div>
        </div>
    );
};