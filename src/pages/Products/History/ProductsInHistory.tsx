import React from 'react';
import {NoProducts} from "../NoProduct/NoProducts";
import {HistoryTable} from "./HistoryTable";
import {ProductType} from "../../../redux/products/productsReduces";

const productsHistory: ProductType[] = [
    {id: 5, name: 'DJI Pocket 2 Creator Combo', price: 499, image: '', date: '19.09.2024', status: 'Sold'},
    {id: 2, name: 'DJI Osmo Action 4', price: 499, image: '', date: '19.09.2024', status: 'Sold'},
    {id: 4, name: 'DJI Mini 3 Pro', price: 909, image: '', date: '19.09.2024', status: 'Sold'},
]

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