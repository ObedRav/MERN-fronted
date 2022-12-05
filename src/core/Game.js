import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../layout/Navigation';
import Cardshow from './CardShow';
import { read } from './apiCore';

const Game = (props) => {
    const [game, setGame] = useState({});
    const [error, setError] = useState(false);
    const gameId = useParams().videogameId;
    

    const readGame = (gameId) => {
        read(gameId).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setGame(data);
            }
        });
    }

    useEffect(() => {
        readGame(gameId);
    }, [props]);

    const goBack = () => (
        <div className="mt-5">
          <Link to="/" className="text-warning">
            Back to Dashboard
          </Link>
        </div>
    );

    return (
        <div>
            <Navigation/>
            <div className="container">
            {
                game &&
                <Cardshow videogame={game}/>
            }
            {goBack()}
            </div>
        </div>
      )
}

export default Game;