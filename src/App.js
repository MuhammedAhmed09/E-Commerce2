import { useEffect, useState } from 'react';
import { commerce } from "./Ecommerce"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Shop from './shopComponents/Shop';
import Cart from "./cartComponents/Cart";
import NavBar from './navComponent/NavBar';
import Home from './Home';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () =>{
    const { data } = await commerce.products.list();
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }

  const handleUpdateToCart = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response);
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response);
  } 

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  
  console.log(products);
  console.log(cart);

  return (
      <BrowserRouter>
      <NavBar totalItems={cart.total_items} />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/Cart" element={<Cart cart={cart} onUpdateToCart={handleUpdateToCart} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
        
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
