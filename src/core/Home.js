import React, { useEffect, useState } from 'react';
import Navigation from '../layout/Navigation';
import { listGames } from './apiCore';
import Card from './Card';

const Home = (req, res) => {

    const [videogames, setVideogames] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [error, setError] = useState(false);
    const [games, setGames] = useState([]);

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        let resultadoBusqueda = videogames.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.category.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
            {
                return elemento;
            }
        })
        setGames(resultadoBusqueda);
    }

    const loadVideogames = () => {
        listGames().then(data => {
            if (data.error)
            {
                setError(data.error);
                console.log(error);
            } else {
                setVideogames(data);
                setGames(data);
                console.log(data);
            }
            
        })
    }

    useEffect(() => {
        loadVideogames();
    }, [])

    const searchBar = () => (
        <div className='container'>
            <div className='row'>
        <div class="input-group rounded">
                    <input 
                    type="search" 
                    class="form-control rounded" 
                    placeholder="Search" 
                    aria-label="Search" 
                    aria-describedby="search-addon" 
                    onChange={handleChange}/>
                    </div>
                    </div>
        </div>
    )

    return(
        <div>
            <Navigation/>
            <div className='container'>

                <div className='row'>
                    <div className = "container mt-5">
                        <div className='row'>
                            <div className='col-md-8 offset-md-2'>
                                {searchBar()}
                            </div>
                        </div>
                    </div>
                    {games && 
                    games.map((data, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-6" >
                            <Card videogame={data} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    
}

export default Home;