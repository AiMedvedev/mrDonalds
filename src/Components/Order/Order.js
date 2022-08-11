import styled from 'styled-components';
import React from 'react';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';

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

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const OrderTotal = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name)],
    choice: ['choice', item => item ? item : 'no choices']
}


export const Order = ({ orders, setOrders, setOpenItem, authentification, logIn, firebaseDatabase }) => {

    const dataBase = firebaseDatabase();

    const total = orders.reduce((result, order) => 
                    totalPriceItems(order) + result, 0);

    const totalCount = orders.reduce((result, order) => 
    order.count + result, 0);

    const deleteItem = (index) => {
        const newOrders = [...orders];

        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        
        dataBase.ref('orders').push().set({
            clientName: authentification.displayName,
            clientEmail: authentification.email,
            order: newOrder
        });

        setOrders([]);
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

            <ButtonCheckout onClick={() => authentification ? sendOrder() : logIn()}>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}