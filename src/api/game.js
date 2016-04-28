// na/v1.3/game/by-summoner/21428290/recent?api_key=5a57118b-b887-4654-8e98-84074784420a
import request from 'request'
import getConfig from '../utils/configParser'
import Promise from 'promise'

export default class GameAPI {
    constructor() {
        this.config = getConfig();
    }

    getRecentGames(summonerID, region) {
        const url = `${this.config.BASE_URL}/${region}/v${this.config.API_VERSIONS.GAME}/game/by-summoner/${summonerID}/recent?api_key=${this.config.RIOT_API}`
        return new Promise((resolve, reject) => {
            request(url, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    resolve(body);
                } else {
                    reject(error);
                }
            });
        });
    }
}
