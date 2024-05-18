import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home  from './components/Home';
import NewArrivalsSection from './components/NewArrivalsSection';
import BagSidebar from './components/BagSidebarFuntion';
import Bag from './components/BagSidebarLayout';
import Theme from './components/Theme';

import {SHOE_LIST} from '../src/services/constant';
import Footer from './components/Footer';
import BagI from './components/BagButton';

// const FAKE_BAG = SHOE_LIST.map(shoe => {
//   return {
//     product: shoe,
//     qty: 1,
//     size: 40,
//   }
// });

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState ([]);
  const addToCart = (product, qty, size) => {
    if(qty && size) {
      const updatedCartItems = [...cartItems]
      const existingItemIndex = cartItems.findIndex(item => item.product.id == product.id)
      if(existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty
        updatedCartItems[existingItemIndex].size = size
      } else {
        updatedCartItems.push({product, qty, size})
      }
      setCartItems(updatedCartItems);
    }
  }
  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems]
    const existingItemIndex = cartItems.findIndex(
      item => item.product.id == productId
    ); 
    updatedCartItems.splice(existingItemIndex, 1)
    setCartItems(updatedCartItems)
  }

  return (
    <>
      <div className='animate-fadeIn lg:pt-6 dark:bg-night-500 dark:text-white'>
        <Nav />
        <Home shoe={currentShoe} onClickToAdd={addToCart}/>
        <NewArrivalsSection item={SHOE_LIST} onClickCard={setCurrentShoe}/>
        <BagSidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
          <Bag bagItems={cartItems} onClickRemove={removeFromCart} />
        </BagSidebar>
        <BagI onCLickBagButton={() => setIsSidebarOpen(true)}/>
        <Theme />
        <Footer />
      </div>
    </>
  )
}
