import React, { useEffect, useState } from 'react';
import NavBar from '../layout/Navbar';
import { listGames } from './apiCore';
import Card from './Card';

const Home = (req, res) => {

    const [videogames, setVideogames] = useState([]);
    const [error, setError] = useState(false);


    const loadVideogames = () => {
        listGames().then(data => {
            if (data.error)
            {
                setError(data.error);
            } else {
                setVideogames(data);
                console.log(data);
            }
            
        })
    }

    useEffect(() => {
        loadVideogames();
    }, [])

    return(
        <div>
            <NavBar/>
            <div className='container'>
                <div className='row'>
                    {videogames.map((data, index) => (
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