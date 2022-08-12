import React from 'react';
import styled from 'styled-components';
import { Banner } from '../Menu/Banner';
import { ListItem } from '../Menu/ListItem';
import { useFetch } from '../Hooks/useFetch';
import { Audio } from  'react-loader-spinner';


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;



export const Menu = () => {

    const res = useFetch();
    const dbMenu = res.response;

    
    return (
        <MenuStyled>
            <Banner/>
    
            {dbMenu ? 
                <>
                    <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem 
                        itemList={dbMenu.burger}
                    />
                    </SectionMenu>
            
                    <SectionMenu>
                        <h2>Закуски / Напитки</h2>
                        <ListItem 
                            itemList={dbMenu.other}
                        />
                    </SectionMenu>
                </> 
                : res.error ? <div>Sorry, we will fix it.</div>
                : <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass="true"
                />
            }
        </MenuStyled>
    )
};