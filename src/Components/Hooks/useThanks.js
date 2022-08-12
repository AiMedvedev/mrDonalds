import { useState } from 'react';

export const useThanks= () => {
	const [openThanks, setOpenThanks] = useState(false);

	return {openThanks, setOpenThanks};
}