import React from 'react';
import {NoProducts} from "../NoProduct/NoProducts";
import {HistoryTable} from "./HistoryTable";
import {ProductType} from "../../../redux/products/productsReduces";

const productsHistory: ProductType[] = []

export const ProductsInHistory = () => {
    return (
        productsHistory.length
            ? <div style={{display: 'flex', gap: '200px'}}>
            <HistoryTable products={productsHistory}/>
            </div>
            : <div style={{display: 'flex', justifyContent: 'center'}}>
                <NoProducts/>
            </div>
    );
};