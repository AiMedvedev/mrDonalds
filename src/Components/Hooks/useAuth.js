import { useState, useEffect } from 'react';

export function useAuth(authFirebase) {
	const [authentification, setAuthentification] = useState(null);

	const auth = authFirebase();

	const provider =  new authFirebase.GoogleAuthProvider();

	const logIn = () => auth.signInWithPopup(provider);

	const logOut = () => {
		auth.signOut()
		.catch(err => console.error())
	}

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setAuthentification(user);
			} else {
				setAuthentification(null);
			}
		})
	}, [authentification]);

	return { authentification, logIn, logOut }
}