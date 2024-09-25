import React from 'react';
import {Table} from "@mantine/core";
import {CustomImage} from "../../../components/CustomImage";
import s from './Cart.module.css'
import {CustomText} from "../../../components/CustomText";
import {CustomButton} from "../../../components/CustomButton";
import minus from '../../../images/minus.svg'
import plus from '../../../images/Plus.svg'
import remove from '../../../images/close.svg'
import {useDispatch} from "react-redux";
import {
    decreaseItemsCount,
    deleteItemFromCart,
    increaseItemsCount,
    ProductWithCount
} from "../../../redux/cart/cartReducer";

type ProductsTableType = {
    addedProducts: ProductWithCount[]
}

export const ProductsTable = (props: ProductsTableType) => {
    const dispatch = useDispatch()
    const removeItemFromCart = (id: number) => {
            dispatch(deleteItemFromCart(id))
    }
    const increaseItemsCountCallback = (id: number) => {
            dispatch(increaseItemsCount(id))
    }
    const decreaseItemsCountCallback = (id: number) => {
            dispatch(decreaseItemsCount(id))
    }
    const rows = props.addedProducts.map((product, index) => (
        <Table.Tr key={index}>
            <Table.Td className={s.productImage}>
                <CustomImage src={product.image}/>
            </Table.Td>
            <Table.Td>
                <CustomText fw={700}>{product.name}</CustomText>
            </Table.Td>
            <Table.Td>
                <CustomText size="lg">${product.price}</CustomText>
            </Table.Td>
            <Table.Td>
                <div style={{display: 'flex'}}>
                    <CustomButton variant="transparent"
                                  size="xs"
                                  onClick={() => decreaseItemsCountCallback(product.productId)}
                    ><CustomImage src={minus}/></CustomButton>
                    <CustomText size="lg">{product.count}</CustomText>
                    <CustomButton variant="transparent"
                                  size="xs"
                                  onClick={() => increaseItemsCountCallback(product.productId)}
                    ><CustomImage src={plus}/></CustomButton>
                </div>
            </Table.Td>
            <Table.Td>
                <CustomButton variant="transparent"
                              color="gray"
                              onClick={() => removeItemFromCart(product.productId)}>
                    <CustomImage src={remove}/>
                    Remove
                </CustomButton>
            </Table.Td>
        </Table.Tr>
    ))
    return (
        <Table style={{maxWidth: '900px', marginLeft: '30px'}}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th></Table.Th>
                    <Table.Th>Unit Price</Table.Th>
                    <Table.Th>Quantity</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};