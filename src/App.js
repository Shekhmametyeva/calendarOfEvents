import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {getUser} from "./API/services";

function App() {
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [userId, setUserId] = useState(localStorage.getItem('auth'));

    const getUserId = async () => {
        try {
            await getUser(userId);
            setUserId(userId);
        } catch (error) {
            console.log(error);
            setUserId('');
            localStorage.removeItem('auth');
        }
    }

    useEffect(() => {
        if(userId) {
            getUserId();
        }
        setIsLoadingPage(false);
    }, []);

    return (
        <AuthContext.Provider value={{userId, setUserId, isLoadingPage, setIsLoadingPage}}>
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