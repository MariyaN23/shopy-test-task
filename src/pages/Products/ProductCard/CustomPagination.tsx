import React, {useState} from 'react';
import {Pagination} from "@mantine/core";
import {randomId} from "@mantine/hooks";
import s from './ProductCard.module.css'

function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
}

type CustomPaginationPropsType = {
    resultLength: number
}

export const CustomPagination = (props: CustomPaginationPropsType) =>  {
    const data = chunk(
        Array(props.resultLength)
            .fill(0)
            .map((_, index) => ({ id: index, name: randomId() })),
        9
    );
    const [activePage, setPage] = useState(1)
    return (
        <div className={s.pagination}>
            <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
        </div>
    );
}