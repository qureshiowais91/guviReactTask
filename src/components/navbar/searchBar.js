import React from 'react';

const SearchBar = () => {
  return (
    <form className='navbar-search'>
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
  );
};

export default SearchBar;
