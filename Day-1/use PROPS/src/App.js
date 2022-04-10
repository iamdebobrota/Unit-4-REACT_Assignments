import styles from './App.module.css';
import List1,{List2} from './components/List'

// import List from './Day-1/List'
import Button from './components/Button';
// import Settings from './components/Settings';
// import Login from './components/Login';
// import Contactus from './components/Contactus'
// import Search from './components/Search';
// import Help from './components/Help';
// import Home from './components/Home';
// import Download from './components/Download';

//functional components
//class components


function App() {
  return (
    <div className={styles.header}>
    {/* <h1>MASAI</h1> */}
  
    {/* <List heading="Course List"/> */}
   <List1/>
   <List2/>
   <div className={styles.btn}>
   <Button JoinUs="JOIN US" Settings="SETTINGS"  Login="LOGIN" Contactus="CONTACT US"
     Search="SEARCH" Help="HELP" Home="HOME" Download="DOWNLOAD"/>
  
   
   </div>
    </div>
  );
}

export default App;
