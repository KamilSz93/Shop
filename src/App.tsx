import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop';
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from './components/Menu';
import { Container } from "react-bootstrap"
import { ShoppingCardProvider } from './context/ShopingCardContext';
 
function App() {
  return (
      <ShoppingCardProvider>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCardProvider>
  );
}

export default App;
