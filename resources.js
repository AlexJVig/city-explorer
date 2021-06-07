const fs = require('fs');

function getCities() {
    let cities = JSON.parse(fs.readFileSync('./cities.json', 'utf8'));
    
    return cities;
}

module.exports.getCities = getCities;