import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink exact to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink exact to="/my-account">My Account</NavLink>
        </li>
        <li>
          <button onClick={goBack}>Back</button>
        </li>
        <li>
          <button onClick={goForward}>Forward</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
