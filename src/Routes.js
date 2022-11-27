import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './core/Home';
import Search from './core/Search'

const RoutesApp = () => {
    return (
        <div>
        <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/search" element = {<Search/>} />
        </Routes>
        </div>
    )
}

export default RoutesApp;