import styled from 'styled-components';
import React, { useContext } from 'react';
import { Overlay } from '../Modal/ModalItem';
import {OrderTitle, OrderTotal, TotalPrice } from './Order';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';


const Modal = styled.div`
	background-color: white;
	width: 600px;
	padding: 30px;
`;

const Text = styled.h3`
	text-align: center;
	margin-bottom: 30px;
`;


const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name)],
    choice: ['choice', item => item ? item : 'no choices']
}


const sendOrder = (dataBase, orders, authentication) => {
        const newOrder = orders.map(projection(rulesData));
        
        dataBase.ref('orders').push().set({
            clientName: authentication.displayName,
            clientEmail: authentication.email,
            order: newOrder
        });
    }

export const OrderConfirm = ({firebaseDatabase}) => {

	const { auth: {authentication}, orders: {orders, setOrders}, orderConfirm: {setOpenOrderConfirm} } = useContext(Context);

	const dataBase = firebaseDatabase();

	const total = orders.reduce((result, order) => 
                    totalPriceItems(order) + result, 0);

		return (
			<Overlay>
				<Modal>
					<OrderTitle>{authentication.displayName}</OrderTitle>
					<Text>Осталось только подтвердить Ваш заказ</Text>
					<OrderTotal>
						<span>Итого</span>
						<TotalPrice>{formatCurrency(total)}</TotalPrice>
					</OrderTotal>
					<ButtonCheckout onClick={() => {
						sendOrder(dataBase, orders, authentication);
						setOrders([]);
						setOpenOrderConfirm(false);
					}} >Подтвердить</ButtonCheckout>
				</Modal>
			</Overlay>
		)
}