import React from 'react';
import {Product} from "../ProductCard/ProductCard";
import {Table} from "@mantine/core";
import s from "../Cart/Cart.module.css";
import {CustomImage} from "../../../components/CustomImage";
import {CustomText} from "../../../components/CustomText";

type HistoryTableType = {
    products: Product[]
}

export const HistoryTable = (props: HistoryTableType) => {
    const rows = props.products.map((product) => (
        <Table.Tr key={product.id}>
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
                <CustomText size="lg">{product.date}</CustomText>
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