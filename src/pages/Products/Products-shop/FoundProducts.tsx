import React, {useEffect} from 'react';
import s from '../ProductCard/ProductCard.module.css'
import {ProductType} from "../../../redux/products/productsReduces";
import {ProductCard} from "../ProductCard/ProductCard";
import {useSelector} from "react-redux";
import {selectProducts} from "../../../redux/products/productsSelector";
import {useActions} from "../../../redux/products/useActions";
import {productsActions} from "../../../redux/products";


export const FoundProducts = () => {
    const allProducts = useSelector(selectProducts)
    const {getProducts} = useActions(productsActions)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className={s.allProducts}>
            {allProducts.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};