import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../ApplicationApi/components/Home";
import Page1 from "../ApplicationApi/components/Page1";
import Page2 from "../ApplicationApi/components/Page2";
import Login from "../ApplicationApi/components/Login";




export default function App2() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/page1">Page 1</Link>
                            </li>
                            <li>
                                <Link to="/page2">Page 2</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact element={<Home />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route
                        path="/login"
                        render={() => (
                            <Login onLogin={(isLoggedIn) => setLoggedIn(isLoggedIn)} />
                        )}
                    />
                </div>
            </Routes>
        </BrowserRouter>
    );
};