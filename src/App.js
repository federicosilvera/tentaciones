import './App.css';
import Menu from "./components/Menu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme"
import { Navbar } from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='menu' element={<Menu/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<Aboutme/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
