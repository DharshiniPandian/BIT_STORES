import React from 'react';
import './horizantal.css';
import { FaSearch, FaBell } from 'react-icons/fa'; 
import Profile from './profile'
import Logo from './logo'
function HorizantalNavbar(){
    return(
        <div className="top-nav">
            
                
            <div className='tit'>
                <Logo />
              <h3>BITSTORES</h3>
              </div>
             
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search product, supplier, order" name="search"/>
                    <button type="submit"><FaSearch /></button> 
                </form>
            </div>
            <div className="notification-icon">
                <a href="/notifications">
                    <FaBell />
                </a>
            </div>
            <div className='profile'>
                <Profile/>
            </div>
            <div className='nav-logo-1'>
                
            </div>
           
        </div>
    );
}

export default HorizantalNavbar;
