import React from 'react';
import SearchBar from './searchBar';
const Navbar = () => {
  return (
    <nav className='container-fluaid  navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
      <div className='container'>
        <SearchBar></SearchBar>
      </div>
    </nav>
  );
};
export default Navbar;
