import React from 'react';
import {NoProducts} from "../NoProduct/NoProducts";
import {HistoryTable} from "./HistoryTable";
import {ProductType} from "../../../redux/products/productsReduces";
import {ProductWithCount} from "../../../redux/cart/cartReducer";
import {useSelector} from "react-redux";
import {selectItemsInCart} from "../../../redux/cart/cartSelector";
import {ProductInHistoryType} from "../../../redux/history/historyReducer";
import {selectItemsInHistory} from "../../../redux/history/historySelector";

//const productsHistory: ProductType[] = []

export const ProductsInHistory = () => {
    const productsHistory: ProductInHistoryType[] = useSelector(selectItemsInHistory)
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