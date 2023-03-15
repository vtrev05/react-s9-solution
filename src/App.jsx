import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import { products } from './utils/products';
import { Navigate } from "react-router-dom";



export const AuthContext = React.createContext({ user: null });

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(!isLoggedIn);
    <Navigate to="/my-account" replace={true}></Navigate>
  };

  const logout = () => {
    setIsLoggedIn(!isLoggedIn);
  
  };


  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
        <Route path="/login"  element={<Login />} />
        <Route
            path="/my-account"
            element={isLoggedIn ? <MyAccount /> : <Navigate to="/login" />}
          />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;