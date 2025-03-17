import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";
import React from "react";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className='wrapper'>
        <BrowserRouter>
        <Header/>
        <main className='main'>
            <div className='mainContainer'>
                <AppRouter/>
            </div>
        </main>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;