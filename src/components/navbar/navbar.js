import React from 'react';
import SearchBar from './searchBar';
import ProfileComponent from './profile';
const Navbar = () => {
  return (
    <nav className='container-fluaid  navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
      <div className='container'>
        <SearchBar className='w100'></SearchBar>
        <ProfileComponent></ProfileComponent>

      </div>
    </nav>
  );
};
export default Navbar;
