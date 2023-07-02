import React, {useState} from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from "./components/Navbar/Navbar";
import "./index.css"
import Profile from "./pages/Profile/Profile"
import Home from "./pages/Home/Home";
import RoutesPath from "./RoutesPath";

function App(key, value) {
    const [signInStatus, setSignInStatus] = useState(() => window.localStorage.getItem("signInStatus") || false)
    const [userId, setUserId] = useState(() => window.localStorage.getItem("userId") || null);
    const handleSignIn = (event) => {
        const loginUserId = 1;
        setUserId(loginUserId)
        setSignInStatus(true)
        window.localStorage.setItem('userId', loginUserId)
        window.localStorage.setItem("signInStatus", true)
    };

    const handleSignOut = () => {
        setSignInStatus(false)
        setUserId(null)
        window.localStorage.removeItem("signInStatus")
        window.localStorage.removeItem("userId")
    }
    return (
        <BrowserRouter>
            <div>
                <NavBar signInStatus={signInStatus} handleSignOut={handleSignOut}/>
                <Routes>
                    <Route exact path={RoutesPath.profile}
                           element={<Profile userId={userId} onSubmit={handleSignIn}/>}/>
                    <Route exact path={RoutesPath.home} element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
