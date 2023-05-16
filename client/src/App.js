import './App.css';
import { Routes, Route,useLocation} from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Dealit from './components/Deatil/Deatil';
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';


function App() {
  const location = useLocation();


  return (
    <div className="App">
      {location.pathname !== "/" &&location.pathname !== "/HomePage" ? <Nav/> :null}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/HomePage/:id" element={<Dealit/>} />
        {/* <Route path="/Mygames" element={} /> */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
