import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/context';

const ToppingWrap = styled.div`
	max-width: 500px;
	margin: 0 auto;
	column-count: 2;
	column-gap: 15px;
`;

const ToppingLabel = styled.label`
	cursor: pointer;
	display: block;
`;

const ToppingCheckbox = styled.input`
	cursor: pointer;
	margin-right: 5px;
`;

export const Toppings = () => {
	
	const {toppings: { toppings, checkToppings }} = useContext(ContextItem);
	
	return (
		<>
			<h3>Добавки</h3>
			<ToppingWrap>
				{toppings.map((item, i) => (
					<ToppingLabel key={i}>
						<ToppingCheckbox 
							type="checkbox"
							checked={item.checked}
							onChange={() => checkToppings(i)} />
						{item.name}
					</ToppingLabel>
				))}
			</ToppingWrap>
		</>
	)
}