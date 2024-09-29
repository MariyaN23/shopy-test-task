import React from 'react';
import {Table} from "@mantine/core";
import s from "../Cart/Cart.module.css";
import {CustomImage} from "../../../components/CustomImage";
import {CustomText} from "../../../components/CustomText";
import {ProductType} from "../../../redux/products/productsReduces";
import {ProductInHistoryType} from "../../../redux/history/historyReducer";

type HistoryTableType = {
    products: ProductInHistoryType[]
}

export const HistoryTable = (props: HistoryTableType) => {
    const rows = props.products.map((product,index) => (
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
                <CustomText size="lg">{product.dateOfBuy}</CustomText>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Table style={{maxWidth: '900px', marginLeft: '30px'}}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Item</Table.Th>
                    <Table.Th></Table.Th>
                    <Table.Th>Unit Price</Table.Th>
                    <Table.Th>Date</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};