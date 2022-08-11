import styled from 'styled-components';
import React, { useContext } from 'react';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    padding: 20px;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
`;

export const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

export const OrderTotal = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;




export const Order = () => {

    const { openItem: {setOpenItem}, auth: {authentication, logIn}, orders: {orders, setOrders}, orderConfirm: {setOpenOrderConfirm} } = useContext(Context);

    const total = orders.reduce((result, order) => 
                    totalPriceItems(order) + result, 0);

    const totalCount = orders.reduce((result, order) => 
    order.count + result, 0);

    const deleteItem = (index) => {
        const newOrders = [...orders];

        newOrders.splice(index, 1);
        setOrders(newOrders);
    }


    return (
        <OrderStyled>
            <OrderTitle>
                 ВАШ ЗАКАЗ
            </OrderTitle>

            <OrderContent>
                {orders.length ? <OrderList>
                    {orders.map((order, index) => <OrderListItem
                        key={index} 
                        order={order}
                        deleteItem={deleteItem}
                        index={index}
                        setOpenItem={setOpenItem}
                        />)}
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            
            {orders.length ? <OrderTotal>
                <span>Итого</span>
                <span>{totalCount}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </OrderTotal> : ''}

            <ButtonCheckout onClick={() => authentication ? setOpenOrderConfirm(true) : logIn()}>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}