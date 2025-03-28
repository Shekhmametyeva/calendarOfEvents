import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";
import 'styles/App.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import AppRouter from "./components/RouterComp/AppRouter";


function App() {
    const [isLoadingPage, setIsLoadingPage] = useState(false);
    const [userId, setUserId] = useState(localStorage.getItem("auth"));

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