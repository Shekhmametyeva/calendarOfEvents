import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
            setIsLoading(false);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
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
        </AuthContext.Provider>
    );
}

export default App;