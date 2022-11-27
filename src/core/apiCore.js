import { API } from '../config';

export const listGames = () => {
     return fetch(
        `${API}/games/videogames`,
        {
            method: 'GET'
        }
     ).then((response) => {
        console.log(response);
        return response.json()
     })
     .catch(err => console.log(err))
}

export default listGames;