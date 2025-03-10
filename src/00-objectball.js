function gameObject(){
    return{
home:{
    teamname: "Brooklyn Nets"
    colors:["Black", "White"],
    players:{
        "Alan Anderson":{
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            Assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
        },
        "Reggie Evans":{
            number: 30,
            shoe: 14,
            points: 12,
            Rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
        },
        "Brook Lopez":{
            number: 11,
            shoe: 17,
            points: 17,
            Rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
    },
    "Mason Plumlee":{
            number: 1,
            shoe: 19,
            points: 26,
            Rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
},
"Jason Terry":{
            number: 31,
            shoe: 15,
            points: 19,
            Rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
    
},
    }
}
away:{
    teamname:"Charlotte Hornets"
    colors:["Turquoise", "Purple"]
    players:{
        "Jeff Adrien":{
            number: 4,
            shoe: 18,
            points: 10,
            Rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
        },
        "Bismak Biyombo":{
            number: 0,
            shoe: 16,
            points: 12,
            Rebounds: 12,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
    },
    "DeSagna Diop":{
        number: 2,
        shoe: 14,
        points: 24,
        Rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
},
"Ben Gordon":{
        number: 8,
        shoe: 15,
        points: 33,
        Rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,    
},
"Brendan Haywood":{
        number: 33,
        shoe: 15,
        points: 6,
        Rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,    
},
}
}
    };
}
console.log(gameObject());
function numPointsScored(playerName){
    let game =gameObject();
    for(let team in game){
        if(game[team].players[PlayerName]){
            return game [team].players[playerName].points;
        }
    }
    return null;
}
function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
    return null;
}
function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null;
}
function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
    return null;
}
function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return [];
}
function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
}
function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
}
function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
}
console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Ben Gordon")); 
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets")); 
console.log(playerStats("Bismack Biyombo")); 

console.log(bigShoeRebounds()); 