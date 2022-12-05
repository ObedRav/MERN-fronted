import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './core/Home';
import Signin from './core/Signin'
import Signup from './core/Signup' 
import AddCategory from './core/AddCategory' 
import AddGame from './core/AddGame' 
import Game from './core/Game'

const RoutesApp = () => {
    return (
        <div>
        <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/signin" element = {<Signin/>} />
                <Route path="/signup" element = {<Signup/>} />
                <Route path="/addcategory" element = {<AddCategory/>} />
                <Route path="/addgame" element = {<AddGame/>} />
                <Route path="/games/:videogameId" element = {<Game/>} />
        </Routes>
        </div>
    )
}

export default RoutesApp;