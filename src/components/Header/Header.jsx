import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar/>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className="header-title text-capitalize">find book anything you search.</h2><br />
                <p className="header-text fs-18 fw-3">Libraries are institutions that provide collections of books, journals and various other sources of information that can be accessed by the public or certain communities.</p>
                <SearchForm/>
            </div>
        </header>
    </div>
  )
}

export default Header