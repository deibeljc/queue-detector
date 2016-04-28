import GameAPI from './api/game'
import Promise from 'promise';

let gameApi = new GameAPI();
gameApi.getRecentGames(21428290, 'na').then((response) => {
    console.log(response);
});
