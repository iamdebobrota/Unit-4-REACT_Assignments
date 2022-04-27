import { useContext } from 'react';
import './App.css';
import { AuthContext } from './Context/AuthProvider';
import Home from './Page/Home';
import Login from './Page/Login';




function App() {

const {isLoggedIn}=useContext(AuthContext);

  return (
  <div className='App'>
{isLoggedIn ? <Home/> : <Login/>}



  </div>
  );
}

export default App;
