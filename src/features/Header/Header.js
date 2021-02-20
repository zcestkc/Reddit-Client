import React, { useState } from 'react';
import './Header.css';
import { FaReddit } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  return (
    <header>
      <div className="logo" >
        <FaReddit className="logo-icon" />
        <p>
          Reddit Client
        </p>
      </div>
    </header>

  );
};

export default Header;
