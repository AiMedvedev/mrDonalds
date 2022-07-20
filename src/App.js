import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';

function App() {

  const [openItem, setOpenItem] = React.useState(null);



  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem={setOpenItem} />
    <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
