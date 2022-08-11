import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useTitle } from './Components/Hooks/useTitle';
import { useAuth } from './Components/Hooks/useAuth';


const firebaseConfig = {
  apiKey: "AIzaSyDlAqCnyHgJZqc9xYO3gEYnmIIRiAtWyJE",
  authDomain: "mrdonalds-d1e0c.firebaseapp.com",
  databaseURL: "https://mrdonalds-d1e0c-default-rtdb.firebaseio.com",
  projectId: "mrdonalds-d1e0c",
  storageBucket: "mrdonalds-d1e0c.appspot.com",
  messagingSenderId: "249645868624",
  appId: "1:249645868624:web:430cf7317d0de132521355"
};

firebase.initializeApp(firebaseConfig);



function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
      {...orders} 
      {...openItem} 
      {...auth}
      firebaseDatabase={firebase.database}/>
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
