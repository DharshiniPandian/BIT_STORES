import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidenavbar/verticalnavbar';
import HorizantalNavbar from './Components/HorizantalNavbar/horizantal';
import User from './allpages/user/user';
import Inventory from './allpages/Inventory/inventory';
import Reports from './allpages/reports/reports';
import Security from './allpages/security/security';
import Order from './allpages/Orders/orders';
import Mteam from './allpages/mteam/mteam';
import Settings from './allpages/settings/settings';
import Logout from './allpages/logout/logout';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <HorizantalNavbar />
          <div className='content'>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/security" element={<Security />} />
            <Route path="/order" element={<Order />} />
            <Route path="/mteam" element={<Mteam />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
