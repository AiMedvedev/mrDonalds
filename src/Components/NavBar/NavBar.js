import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signInImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    font-family: Roboto, sans-serif;
    background-color: transparent;
    font-size: 16px;
    border-color: transparent;
    color: white;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

const Logout = styled.span`
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 30px;
`;

const Figure = styled.figure`
    margin: 30px;
`;


export const NavBar = ({ authentification, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>MrDonald's</H1>
        </Logo>
        {authentification ? 
            <User>
                <Figure>
                    <img src={signInImg} alt={authentification.displayName}/>
                    <figcaption>{authentification.displayName}</figcaption>
                </Figure>
                <Logout title="выйти" onClick={logOut}>X</Logout>
            </User>  : 
            <Login onClick={logIn}>
                <Figure>
                    <img src={signInImg} alt="войти"/>
                    <figcaption>войти</figcaption>
                </Figure>
            </Login>}
    </NavBarStyled>
);