import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;   
    margin: 0 auto; 

    color: white;
    background-color: #299B01;
    width: 250px;
    height: 65px;
    border-color: transparent;
    font-size: inhe rit;
    cursor: pointer;

    transition-color: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }

    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`;