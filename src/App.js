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
import { useAuth } from './Components/Hooks/useAuth';

/* const firebaseConfig = {
  apiKey: "AIzaSyAM7OC9_eZGLCGQonGztP49s-5euhmSZYU",
  authDomain: "mrdonalds-5a7f4.firebaseapp.com",
  projectId: "mrdonalds-5a7f4",
  storageBucket: "mrdonalds-5a7f4.appspot.com",
  messagingSenderId: "788990244655",
  appId: "1:788990244655:web:1d825fba47a029ad1353da"
}; */

const firebaseConfig = {
  apiKey: "AIzaSyBpWUereJkMOWoeOqcgMDtljj2iOjiHHro",
  authDomain: "mrdonalds-2dfcd.firebaseapp.com",
  databaseURL: "https://mrdonalds-5a7f4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-2dfcd",
  storageBucket: "mrdonalds-2dfcd.appspot.com",
  messagingSenderId: "351455909729",
  appId: "1:351455909729:web:33419f38acd9098b2c9720"
};

firebase.initializeApp(firebaseConfig);



function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

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
