import React from 'react';
import {Product} from "../ProductCard/ProductCard";
import img5 from "../../../images/products/product5.svg";
import img2 from "../../../images/products/product2.svg";
import img4 from "../../../images/products/product4.svg";
import {NoProducts} from "../NoProduct/NoProducts";
import {HistoryTable} from "./HistoryTable";

const productsHistory: Product[] = [
    {id: 5, name: 'DJI Pocket 2 Creator Combo', price: '499', image: img5, date: '19.09.2024'},
    {id: 2, name: 'DJI Osmo Action 4', price: '499', image: img2, date: '19.09.2024'},
    {id: 4, name: 'DJI Mini 3 Pro', price: '909', image: img4, date: '19.09.2024'},
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