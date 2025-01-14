import React, { useRef, useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useGlobalContext } from '../../contex'
import "./SearchForm.css"
import { useNavigate } from 'react-router-dom'


const SearchForm = () => {
    const {setResultTitle, setSearchTerm} = useGlobalContext()
    const searchText = useRef('')
    const navigate = useNavigate()

    useEffect(()=> searchText.current.focus(),[])
    const handleSubmit = (e) => {
        e.preventDefault()
        let tempSearchTerm = searchText.current.value.trim()
        if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
            setSearchTerm('the lost world')
            setResultTitle('Please Enter Something ...')
        }else{
            setSearchTerm(searchText.current.value)
        }
        navigate('/book')
    }
  return (
    <div className='search-form'>
        <div className="contaner">
            <div className="search-form-content">
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="search-form-elem flex flex-sb bg-white">
                        <input type="text" className='form-control' placeholder='Search Book ...'ref={searchText} />
                        <button type='submit' className='flex flex-c' onSubmit={handleSubmit}>
                        <FaSearch className='text-blue' size={32} style={{ color: '#0B666A' }} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SearchForm