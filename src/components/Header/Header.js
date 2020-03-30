import React, { useState } from 'react';
import './Header.scss';
import NavItem from './NavItem/NavItem';

const Header = () => {
  const [burgerMenuToggled, setBurgerMenuToggled] = useState(false);

  return (
    <header>
      <div className='wrapper'>
        <nav>
          <h3>JOSH BREARLEY</h3>
          <div
            className='burger'
            onClick={() => {
              setBurgerMenuToggled(!burgerMenuToggled);
            }}
          >
            <div
              className={burgerMenuToggled ? 'line modified-line-01' : 'line'}
            ></div>
            <div
              className={burgerMenuToggled ? 'line modified-line-02' : 'line'}
            ></div>
            <div
              className={burgerMenuToggled ? 'line modified-line-03' : 'line'}
            ></div>
          </div>
          <ul
            className={burgerMenuToggled ? 'nav-list open' : 'nav-list'}
            onClick={() => {
              setBurgerMenuToggled(false);
            }}
          >
            <NavItem link='/' exact>
              Home
            </NavItem>
            <NavItem link='/experience' exact>
              Experience
            </NavItem>
            <NavItem link='/projects' exact> 
              Projects
            </NavItem>
            <NavItem link='/events' exact> 
              Events
            </NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;