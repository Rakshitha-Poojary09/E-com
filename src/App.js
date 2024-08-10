import React from 'react' 
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import NavBar from './Pages/NavBar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from'./Pages/Product'
import Category from'./Pages/Category'
import About from './Pages/About'
import FilterProduct from './Pages/FilterProduct'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/About'  element={<About/>}/>
      <Route path='/Contact'  element={<Contact/>}/>
      <Route path='/Product'  element={<Product/>}/>
      <Route path='/Category'  element={<Category/>}/>
      <Route path='/cat-Product/:catname'  element={<FilterProduct/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
