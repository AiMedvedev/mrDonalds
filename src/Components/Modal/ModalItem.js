import styled from 'styled-components';
import React, { useContext } from 'react';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { Toppings } from './Toppings';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Choices }  from './Choices';
import { Context, ContextItem } from '../Functions/context';
import { Overlay } from '../Style/OrderLayout';


const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;    
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: calc(100% - 200px);
    padding: 30px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px;
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    font-weight: 700;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const ModalItem = () => {
    
    const { 
        openItem: {openItem, setOpenItem}, 
        orders: {orders, setOrders} 
    } = useContext(Context);

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;


    const closeModal = (e) => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }; 
    
    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;

        setOrders(newOrders);
        setOpenItem(null);
    }

    return (
        <ContextItem.Provider value={{
            choices,
            counter,
            toppings
        }}>
            <Overlay id="overlay" onClick={closeModal}>
                <Modal>
                    <Banner img={openItem.img}/>

                    <Content>
                        <HeaderContent>
                            <p>{openItem.name}</p>
                            <p>{formatCurrency(openItem.price)}</p>
                        </HeaderContent>

                        <CountItem />
                        {openItem.toppings && <Toppings />}
                        {openItem.choices && <Choices openItem={openItem} />}

                        <TotalPriceItem>
                            <span>Цена</span>
                            <span>{formatCurrency(totalPriceItems(order))}
                            </span>
                        </TotalPriceItem>
                        <ButtonCheckout 
                        onClick={isEdit ? editOrder : addToOrder}
                        disabled={order.choices && !order.choice}
                        >{isEdit ? 'Редактировать' : 'Добавить'}</ButtonCheckout>
                    </Content>
                </Modal>
            </Overlay>
        </ContextItem.Provider>
    );
};

