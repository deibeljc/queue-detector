import fs from 'fs'
import path from 'path'

/**
 * Gets the config json file and turns it into a consumable
 * entity
 * @return {JSON} The config in a consumable JSON format
 */
export default function getConfig() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../config/config.json')));
}
