import React from "react";
import SearchBar from "./searchBar";
const Navbar = () => {
  return (
    <nav className="d-none navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
         <SearchBar></SearchBar> 
    </nav>
  );
};

export default Navbar;
