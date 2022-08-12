import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context, ContextItem } from '../Functions/context';


const ChoiceWrap = styled.div`
	max-width: 500px;
	margin: 0 auto;
	column-count: 2;
	column-gap: 15px;
`;

const ChoiceRadio = styled.input`
	cursor: pointer;
	margin-right: 5px;
`;

const ChoiceLabel = styled.label`
	cursor: pointer;
	display: block;
`;


export const Choices = () => {

	const { choices: { choice, changeChoices }} = useContext(ContextItem);
	const { openItem: {openItem} } = useContext(Context);

	return (
		<>
			<h3>Выбор</h3>
			<ChoiceWrap>
				{openItem.choices.map((item, i) => (
					<ChoiceLabel key={i}>
						<ChoiceRadio 
							type="radio"
							name="choices"
							checked={choice === item}
							value={item}
							onChange={changeChoices} />
						{item}
					</ChoiceLabel>
				))}
			</ChoiceWrap>
		</>
	)
}