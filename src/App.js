
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Home from './components/nabar/Navbar'
import Product from './components/product/product';
import Users from './components/user/Users';



function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' element = {<Login/>}></Route>
       <Route path='/home' element = {<Home/>}></Route>
       <Route path='/user/list' element = {<Users/>}></Route>
       <Route path='/product' element ={<Product/>}></Route>
     </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
