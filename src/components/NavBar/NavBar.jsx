import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
export default function NavBar() {
  return (
    <div className='navbar'>
      <nav className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='todos'>Todos</Link>
        <Link to='appointments'>Appointments</Link>
        <Link to='events'>Events</Link>
        <Link to='doctors'>Doctors</Link>
        <Link to='clients'>Clients</Link>
      </nav>
    </div>
  );
}
