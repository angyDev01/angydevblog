import { useState } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import NavBar  from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleDetails from './pages/ArticleDetails';



function App() {

  return (
    <div className='App' >

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/articles' element={<HomePage />} />
        <Route path='/projets' element={<HomePage />} />
        <Route path='/about' element={<HomePage />} />
        <Route path='/cours' element={<HomePage />} />
        <Route path='/articles/:id' element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
