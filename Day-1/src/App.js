import styles from './App.module.css';
import List1,{List2} from './components/List'

// import List from './Day-1/List'
import JoinUs from './components/JoinUs';
import Settings from './components/Settings';
import Login from './components/Login';
import Contactus from './components/Contactus'
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';

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
   <JoinUs title="JOIN US"/>
   <Settings title="SETTINGS"/>
    <Login title="LOGIN"/>
    <Contactus title="CONTACT US"/>
   <Search title="SEARCH"/>
   <Help title="HELP"/>
   <Home title="HOME"/>
   <Download title="DOWNLOAD"/>
   
   </div>
    </div>
  );
}

export default App;
