import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import { AppProvider } from './contex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='book' element={<BookList/>}></Route>
        <Route path='book/:id' element={<BookDetails/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

