import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom'
import Products from './components/Products';
import Footer from './components/Footer';
import Product from './components/Product';
import Login from './components/Login';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
     <Route exact path='/products' element={<Products/>}/>
     <Route exact path='/products/:id' element={<Product/>}/>
     <Route exact path='/login' element={<Login/>}/>
     <Route exact path='/cart' element={<Cart/>} />
     <Route exact path='/about' element={<About/>} />
     <Route exact path='/contact' element={<Contact/>} />
     <Route exact path='/regiter' element={<Register/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
