import React, { useContext } from 'react';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { OrderStyled, OrderTitle, OrderContent, OrderList, OrderTotal, TotalPrice, EmptyList } from '../Style/OrderLayout';

export const Order = () => {

    const { 
        auth: {authentication, logIn}, 
        orders: {orders, setOrders}, 
        orderConfirm: {setOpenOrderConfirm} 
    } = useContext(Context);

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
                    {orders.map((order, index) => 
                        <OrderListItem
                            key={index} 
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                        />)}
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            
            {orders.length ? 
            <>
                <OrderTotal>
                    <span>Итого</span>
                    <span>{totalCount}</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </OrderTotal>
                <ButtonCheckout onClick={() => authentication ? setOpenOrderConfirm(true) : logIn()}>Оформить</ButtonCheckout>
            </>
            : ''}
        </OrderStyled>
    )
}