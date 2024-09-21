import React from 'react';
import {Item} from "./Item/Item";
import {ProductType} from "../../../redux/products/productsReduces";

const userProducts: ProductType[] = [
    {id: 3, name: 'DJI Mini 3 Pro (DJI RC)', price: 1158, image: '', status: 'On sale', date: '20.09.2024'},
    {id: 6, name: 'DJI RS 3', price: 549, image: '', status: 'Sold', date: '20.09.2024'},
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