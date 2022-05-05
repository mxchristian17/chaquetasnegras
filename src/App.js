import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
//import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="services" element={ <Services /> } />
        {
        //<Route path="products" element={ <Products /> } />
        }
        <Route path="contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
