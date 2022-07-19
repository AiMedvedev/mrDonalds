import styled from 'styled-components';
import React from 'react';

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
    display: flex;
    flex-direction: column;
`;

const Banner = styled.div`
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover  ;
    background-position: center;
    margin-bottom: 20px;
`;

const HeaderList = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px;
    font-family: Pacifico;
    font-size: 22px;
`;

const Button = styled.button`
    align-self: center;
    color: white;
    background-color: green;
    width: 180px;
    height: 40px;
    border: none;
    
    cursor: pointer;
`;

export const ModalItem = ({ openItem, setOpenItem}) => {
    
    function closeModal(e) {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    } 

    if(!openItem) return null;
    
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <HeaderList>
                    <p>{openItem.name}</p>
                    <p>{openItem.price.toLocaleString('ru-RU',
                    {style: 'currency', currency: 'RUB'})}</p>
                </HeaderList>
                <Button>Добавить</Button>
            </Modal>
        </Overlay>
    );
};

