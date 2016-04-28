import fs from 'fs';
import path from 'path'

export default function getConfig() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../config/config.json')));
}
