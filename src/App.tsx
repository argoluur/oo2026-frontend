import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import ManageProducts from './pages/admin/ManageProducts'
import ManageCategories from './pages/admin/ManageCategories'

function App() {

  return (
    <>
    <Link to="/">
      <button>Avalehele</button>
    </Link>
    <Link to="/cart">
      <button>Ostukorvi</button>
    </Link>
    <Link to="/add-product">
      <button>Lisa toode</button>
    </Link>
    <Link to="/manage-products">
      <button>Muuda produkte</button>
    </Link>
    <Link to="/manage-categories">
      <button>Muude kategooriaid</button>
    </Link>

      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/cart' element={ <HomePage /> }/>
        <Route path='/add-product' element={ <AddProduct /> }/>
        <Route path='/edit-product' element={ <EditProduct /> }/>
        <Route path='/manage-products' element={ <ManageProducts /> }/>
        <Route path='/manage-categories' element={ <ManageCategories /> }/>
        
      </Routes>
    </>
  )
}

export default App
