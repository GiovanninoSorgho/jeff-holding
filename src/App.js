import logo from './logojeff.svg';
// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
// import { Nav, Navbar, NavDropdown, ButtonGroup } from 'react-bootstrap'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Salon from './pages/Salon';
import Noergo from "./pages/Noergo";
import Ergo from "./pages/Ergo";
import Manger from "./pages/Manger";
import Bureau from "./pages/Bureau";
import Chambre from "./pages/Chambre";






function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <NavBar />
        {/* <Banner /> */}

        <Routes>

          {/* <Route path="/salon" > {Salon} </Route> */}
          <Route path="/" element={<Banner />} />
          <Route path="/Salon" element={<Salon />} />
          <Route path="/SalleaManger" element={<Manger />} />
          <Route path="/Bureau" element={<Bureau />} />
          <Route path="/Chambre" element={<Chambre />} />
          <Route path='/Noergo' element={<Noergo />} />
          <Route path='/Ergo' element={<Ergo />} />



        </Routes>

        




      </div>
    </BrowserRouter>

  );
}

export default App;

