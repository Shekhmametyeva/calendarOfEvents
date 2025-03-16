import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import PersonalAccount from "./components/pages/PersonalAccount/PersonalAccount";
import React from "react";

function App() {
  return (
    <div className='wrapper'>
        <BrowserRouter>
        <Header/>
        <main className='main'>
            <div className='mainContainer'>
                <Routes>
                    <Route path="*" element={<Home/>} replace={true} />
                    <Route path="home" element={<Home/>} />
                    <Route path="personal-account" element={<PersonalAccount/>} />
                </Routes>

            </div>
        </main>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;