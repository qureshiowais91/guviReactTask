import React from 'react';
import undrawprofile from '../../img/undraw_profile.svg';
import undraw_new_message from '../../img/undraw_new_message.svg';
import undraw_notify from '../../img/undraw_notify.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileComponent = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = (e) => {
    setShow(false);
    if (e.target.value == 'logout') {
      navigate('/login');
    }
  };
  const handleShow = () => setShow(true);

  return (
    <ul className='navbar-nav ml-auto'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ready to Leave?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select "Logout" below if you are ready to end your current session.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancle
          </Button>
          <Button variant='primary' value={"logout"} onClick={handleClose}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      <li className='nav-item dropdown no-arrow d-sm-none'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='searchDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <i className='fas fa-search fa-fw'></i>
        </a>
        <div
          className='dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in'
          aria-labelledby='searchDropdown'
        >
          <form className='form-inline mr-auto w-100 navbar-search'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control bg-light border-0 small'
                placeholder='Search for...'
                aria-label='Search'
                aria-describedby='basic-addon2'
              />
              <div className='input-group-append'>
                <button className='btn btn-primary' type='button'>
                  <i className='fas fa-search fa-sm'></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <li className='nav-item dropdown no-arrow mx-1'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='alertsDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <img
            className='img-profile rounded-circle'
            src={undraw_notify}
            alt='Profile'
          />
          <span className='badge badge-danger badge-counter'>3+</span>
        </a>
        <div
          className='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
          aria-labelledby='alertsDropdown'
        >
          <h6 className='dropdown-header'>Alerts Center</h6>
          {/* Alerts dropdown items */}
        </div>
      </li>
      <li className='nav-item dropdown no-arrow mx-1'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='messagesDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <img
            className='img-profile rounded-circle'
            src={undraw_new_message}
            alt='Profile'
          />
          <span className='badge badge-danger badge-counter'>7</span>
        </a>
        <div
          className='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
          aria-labelledby='messagesDropdown'
        >
          <h6 className='dropdown-header'>Message Center</h6>
        </div>
      </li>

      <div className='topbar-divider d-none d-sm-block'></div>

      <li className='nav-item dropdown no-arrow'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='userDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <span className='mr-2 d-none d-lg-inline text-gray-600 small'>
            Douglas McGee
          </span>

          <Dropdown>
            <Dropdown.Toggle
              className='bg-transparent '
              variant=''
              id='dropdown-basic'
            >
              <img
                className='img-profile rounded-circle'
                src={undrawprofile}
                alt='Profile'
              />{' '}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Profile</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Settings</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Activity Log</Dropdown.Item>
              <hr></hr>
              <Dropdown.Item>
                <Button variant='primary' onClick={handleShow}>
                  Logout
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </a>

        <div
          className='dropdown-menu dropdown-menu-right shadow animated--grow-in'
          aria-labelledby='userDropdown'
        >
          <a className='dropdown-item' href='#'>
            <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400'></i>
            Profile
          </a>
          <a className='dropdown-item' href='#'>
            <i className='fas fa-cogs fa-sm fa-fw mr-2 text-gray-400'></i>
            Settings
          </a>
          <a className='dropdown-item' href='#'>
            <i className='fas fa-list fa-sm fa-fw mr-2 text-gray-400'></i>
            Activity Log
          </a>
          <div className='dropdown-divider'></div>
          <a
            className='dropdown-item'
            href='#'
            data-toggle='modal'
            data-target='#logoutModal'
          >
            <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400'></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
  );
};

export default ProfileComponent;
