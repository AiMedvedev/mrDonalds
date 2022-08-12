import styled from 'styled-components';
import React, { useContext} from 'react';
import { Overlay } from '../Style/OrderLayout';
import { Context } from '../Functions/context';


const Modal = styled.div`
	background-color: white;
	width: 300px;
	padding: 30px;
`;

const Text = styled.h3`
	text-align: center;
	margin-bottom: 30px;
`;



export const ThankYou = () => {
	const {thanks: {setOpenThanks}} = useContext(Context);

	return (
		<Overlay>
			<Modal>
				<Text onClick={() => setOpenThanks(false)}>Спасибо! Ваш заказ принят.</Text>
			</Modal>
		</Overlay>
	);
}