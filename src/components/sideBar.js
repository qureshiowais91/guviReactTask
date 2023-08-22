import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [showComponents, setShowComponents] = useState(false);
  const [showUtil, setShowUtil] = useState(false);
  const [showPages, setShowPages] = useState(false);

  let navigate = useNavigate();
  function handleClick() {
    navigate('/login');
  }


  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
     
      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Interface</div>

      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
        onClick={ () => { return showComponents ? setShowComponents(false) : setShowComponents(true) }}
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span >Components</span>
        </Link>
        <div
          id="collapseTwo"
          className={`${showComponents ? "collapse show" : "collapse"}`}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <NavLink className="collapse-item" to="/dashboard/buttons">
              Buttons
            </NavLink>
            <Link className="collapse-item" to="/dashboard/cards">
              Cards
            </Link>
          </div>
        </div>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <Link
          onClick={()=>{ return showUtil ? setShowUtil(false):setShowUtil(true)  }}
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span >Utilities</span>
        </Link>
        <div
          id="collapseUtilities"
          className={`${showUtil ? "collapse show" : "collapse"}`}
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link className="collapse-item" to="/dashboard/utilities-color">
              Colors
            </Link>
            <Link className="collapse-item" to="/dashboard/utilities-border">
              Borders
            </Link>
            <Link className="collapse-item" to="/dashboard/utilities-animation">
              Animations
            </Link>
            <Link className="collapse-item" to="/dashboard/utilities-other">
              Other
            </Link>
          </div>
        </div>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Addons</div>

      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
         onClick={()=>{ return showPages ? setShowPages(false):setShowPages(true)  }}
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </Link>
        <div
          id="collapsePages"
          className={`${showPages ? "collapse show" : "collapse"}`}
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <Link className="collapse-item" onClick={handleClick} to="/login">
              Login
            </Link>
            <Link className="collapse-item" to="/register">
              Register
            </Link>
            <Link className="collapse-item" to="/forgot-password">
              Forgot Password
            </Link>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <Link className="collapse-item" to="/dashboard/404">
              404 Page
            </Link>
            <Link className="collapse-item" to="/dashboard/blank">
              Blank Page
            </Link>
          </div>
        </div>
      </li>

      {/* Nav Item - Charts */}
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/charts">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>

      {/* Nav Item - Tables */}
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/tables">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </Link>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/* Sidebar Message */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
};

export default Sidebar;
