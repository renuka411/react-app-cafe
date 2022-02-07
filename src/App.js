import React from 'react';
import './default.scss'
import { ShoppingProvider } from './components/ShoppingContext/ShoopingContext'
import Header from './components/Header/index'
import Shelf from './components/Shelf/index'
import ShoppingCart from './components/ShoppingCart/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <>
      <ShoppingProvider>
        <Header />
        <ShoppingCart />
        <Shelf />
      </ShoppingProvider>
      <Footer />
    </>
  );
}

export default App;