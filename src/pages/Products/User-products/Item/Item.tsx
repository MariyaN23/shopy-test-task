import React from 'react';
import {CustomImage} from "../../../../components/CustomImage";
import {CustomText} from "../../../../components/CustomText";
import {CustomButton} from "../../../../components/CustomButton";
import trash from '../../../../images/TrashCan.svg'
import s from './Item.module.css'
import {CustomTitle} from "../../../../components/CustomTitle";
import {ProductType} from "../../../../redux/products/productsReduces";
import {useActions} from "../../../../redux/useActions";
import {productsActions} from "../../../../redux/products";

type ItemPropsType = {
    product: ProductType
}

export const Item = (props: ItemPropsType) => {
    const {deleteProduct} = useActions(productsActions)
    const deleteUserProduct = ()=> {
        const id = props.product.id
        if (id)
        deleteProduct(id)
    }
    return (
        <div className={s.ItemCard}>
            <CustomImage src={props.product.image}/>
            <CustomButton variant="default" color="gray" className={s.delete} onClick={deleteUserProduct}>
                <CustomImage src={trash}/>
            </CustomButton>
            <CustomText className={s.status} style={props.product.status === 'Sold' ? {color: '#17B26A', backgroundColor: '#E8F7F0'} : {}}>{props.product.status}</CustomText>
            <CustomTitle order={4} className={s.productName}>{props.product.name}</CustomTitle>
            <div className={s.price}>
                <CustomText fw={300}>Price:</CustomText>
                <CustomText fw={700}>${props.product.price}</CustomText>
            </div>
        </div>
    );
};