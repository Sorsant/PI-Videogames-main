import './App.css';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Dealit from './components/Deatil/Deatil';


function App() {



  return (
    <div className="App">
       {/* {location.pathname !== "/" ? <Nav/> : null}       */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Deatil:id" element={<Dealit />} />
        {/* <Route path="*" element={}} /> */}// ruta de error a construir 
      </Routes>
    </div>
  );
}

export default App;
