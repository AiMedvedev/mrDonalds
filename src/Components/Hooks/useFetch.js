import { useState, useEffect } from 'react';

export const useFetch = () => {

	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {(async() => {
			const json = await fetch('DB.json');
			const res = await json.json();
			setResponse(res)
			})();
		} catch (err) {
			setError(err)
		}
	}, []);

	return { response, error };
}