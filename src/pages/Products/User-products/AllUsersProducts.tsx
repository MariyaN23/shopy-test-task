import React from 'react';
import {Item} from "./Item/Item";
import {Product} from "../ProductCard/ProductCard";
import img3 from "../../../images/products/product3.svg";
import img6 from "../../../images/products/product6.svg";

const userProducts: Product[] = [
    {id: 3, name: 'DJI Mini 3 Pro (DJI RC)', price: '1158', image: img3, status: 'On sale'},
    {id: 6, name: 'DJI RS 3', price: '549', image: img6, status: 'Sold'},
]

export const AllUsersProducts = () => {
    return (
        <div style={{display: 'flex'}}>
            {userProducts.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};