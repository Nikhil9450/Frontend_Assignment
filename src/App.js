import logo from './logo.svg';
import './App.css';
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import PageNavbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import CarDetails from './pages/CarDetails';

function App() {
  return (
    <div className="App">
    <PageNavbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/car-details" element={<CarDetails/>} />
          <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default App;
