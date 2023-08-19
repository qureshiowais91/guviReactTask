import React from 'react';
import '../../../sb-admin-2.min.css';
import { useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const LoginComp = () => {
  useEffect(() => {
    document.body.classList.add('bg-gradient-primary');

    return () => {
      document.body.classList.remove('bg-gradient-primary');
    };
  }, []);

  let navigate = useNavigate();
  function handleClick() {
    navigate('/dashboard');
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <div className='row'>
                <div className='col-lg-6 d-none d-lg-block bg-login-image'></div>
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h1 className='h4 text-gray-900 mb-4'>Welcome Back!</h1>
                    </div>
                    <form className='user'>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control form-control-user'
                          id='exampleInputEmail'
                          aria-describedby='emailHelp'
                          placeholder='Enter Email Address...'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='password'
                          className='form-control form-control-user'
                          id='exampleInputPassword'
                          placeholder='Password'
                        />
                      </div>
                      <div className='form-group'>
                        <div className='custom-control custom-checkbox small'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customCheck'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='customCheck'
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        onClick={handleClick}
                        className='btn btn-primary btn-user btn-block'
                      >
                        Login
                      </button>
                      <hr />
                      <div className='btn btn-google btn-user btn-block'>
                        <i className='fab fa-google fa-fw'></i> Login with
                        Google
                      </div>
                      <Link
                        to='/dashboard'
                        className='btn btn-facebook btn-user btn-block'
                      >
                        <i className='fab fa-facebook-f fa-fw'></i> Login with
                        Facebook
                      </Link>
                    </form>
                    <hr />
                    <div className='text-center'>
                      <NavLink className='small' to='/forgot-password'>
                        Forgot Password?
                      </NavLink>
                    </div>
                    <div className='text-center'>
                      <NavLink className='small' to='/register'>
                        Create an Account!
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
