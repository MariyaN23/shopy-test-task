import React, {useState} from 'react';
import {Table} from "@mantine/core";
import {Product} from "../ProductCard/ProductCard";
import {CustomImage} from "../../../components/CustomImage";
import s from './Cart.module.css'
import {CustomText} from "../../../components/CustomText";
import {CustomButton} from "../../../components/CustomButton";
import minus from '../../../images/minus.svg'
import plus from '../../../images/Plus.svg'
import remove from '../../../images/close.svg'

type ProductsTableType = {
    addedProducts: Product[]
}

export const ProductsTable = (props: ProductsTableType) => {
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    const minusQuantity =(price: number)=> {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            setPrice(price * (quantity - 1))
        }
    }
    const addQuantity = (price: number) => {
        setQuantity(quantity + 1)
        setPrice(price * (quantity + 1))
    }
    const rows = props.addedProducts.map((product) => (
        <Table.Tr key={product.id}>
            <Table.Td className={s.productImage} >
                <CustomImage src={product.image}/>
            </Table.Td>
            <Table.Td>
                <CustomText fw={700}>{product.name}</CustomText>
            </Table.Td>
            <Table.Td>
                <CustomText size="lg">${price}</CustomText>
            </Table.Td>
            <Table.Td>
                <div style={{display: 'flex'}}>
                    <CustomButton onClick={()=>minusQuantity(+product.price)} variant="transparent" size="xs"><CustomImage src={minus}/></CustomButton>
                    <CustomText size="lg">{quantity}</CustomText>
                    <CustomButton onClick={()=>addQuantity(+product.price)} variant="transparent" size="xs"><CustomImage src={plus}/></CustomButton>
                </div>
            </Table.Td>
            <Table.Td>
                <CustomButton variant="transparent" color="gray"><CustomImage src={remove}/>Remove</CustomButton>
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
                    <Table.Th>Quantity</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};