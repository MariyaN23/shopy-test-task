import React, {useEffect} from 'react';
import {Item} from "./Item/Item";
import {ProductType} from "../../../redux/products/productsReduces";
import {useActions} from "../../../redux/useActions";
import {productsActions} from "../../../redux/products";
import {useSelector} from "react-redux";
import {selectUserProducts} from "../../../redux/products/productsSelector";
import {selectUsersId} from "../../../redux/login/loginSelector";

export const AllUsersProducts = () => {
    const userProducts: ProductType[] = useSelector(selectUserProducts)
    const userId: number | null = useSelector(selectUsersId)
    const {getAllUsersProducts} = useActions(productsActions)
    useEffect(() => {
        if (userId) {
            getAllUsersProducts({userId: userId})
        }
    }, [])
    return (
        <div style={{display: 'flex', maxWidth: "900px", flexWrap: "wrap"}}>
            {userProducts.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};