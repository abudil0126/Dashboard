import './App.css'
import Products from './pages/Products'
import Customers from './pages/Customers';
import {Routes, Route, NavLink} from 'react-router-dom'

import { TbSettings2,TbUserSquareRounded } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";


function App() {




  return (
    <>
    <div className="container">
 
    <div className='sidebar'>
      <h1><TbSettings2/>Dashboard</h1>
      <h4 className='h4'><NavLink className={({isActive}) => (isActive ? 'h4_active' : 'h4')} to={''}><MdProductionQuantityLimits />Products</NavLink></h4>
      <h4 className='h4'><NavLink className={({isActive}) => (isActive ? 'h4_active' : 'h4')} to={'customers'}><TbUserSquareRounded />Customers</NavLink></h4>
      </div>
      {/* <div className='products'><Products/></div> */}
      <Routes>
      <Route path='' element={<Products/>}/>
      <Route path='customers' element={<Customers/>}/>
    </Routes>
    </div>
 
    </>
  )
}

export default App
