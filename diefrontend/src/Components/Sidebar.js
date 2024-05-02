import React from 'react';
import '../Styles/ComponentsStyles/Sidebar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="logo">
        <h1 style={{ textAlign: 'center' }}>DIE Engine</h1>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bulk-registration">Bulk Registration</Link></li>
        <li><Link to='/customer'>Customer</Link></li>
        <li><Link to="/merchant">Merchant</Link></li>
        <li><Link to="/merchant-setup">Merchant Setup</Link></li>
        <li><Link to="/thirdparty-integration">Third Party Setup</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
