import styled from 'styled-components';
import React from 'react';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';


const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 999;
`;

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


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
    
    const counter = useCount();


    const closeModal = (e) => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }; 
    
    const order = {
        ...openItem,
        count: counter.count
    };


    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>

                <Content>
                    <HeaderContent>
                        <p>{openItem.name}</p>
                        <p>{formatCurrency(openItem.price)}</p>
                    </HeaderContent>

                    <CountItem {...counter} />
                    
                    <TotalPriceItem>
                        <soan>Цена</soan>
                        <span>{formatCurrency(totalPriceItems(order))}
                        </span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    );
};

