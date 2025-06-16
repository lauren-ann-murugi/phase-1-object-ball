
console.log(gameObject());
// define a function 
function gameObject() {
    return {
        home: {
            teamName:"Brooklyn Nets",
            colors:["Black", "White"],
            prayers:{
                "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
            },
                "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
            },
                "Brook Lopez": {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
                "Mason Plumlee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5,
            },
                "Jason Terry": {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1,
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
                Players:{
                "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
            },
                "Bismack Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10,
            },
                "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
            },
                "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
            },
                "Kemba Walker": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
            },
             
              
        }
        }
    }
}
}
}

//create a function
 function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());  //logs "Brooklyn Nets"

// Function to get the name of the home team
function homeTeamName() {
  return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());  //logs "Brooklyn Nets"


function numberPointsScored(playerName) {
  let object = gameObject();
  return object["home"]["prayers"][playerName]["points"];
}
console.log(numberPointsScored("Alan Anderson"));  //logs 22

// Function to get the number of points scored by a player
function shoeSize(playerName) {
    let object = gameObject();
    return object["home"]["players"][playerName]["shoe"];
}
console.log(shoeSize("Alan Anderson"));  //logs 16

// Function to get the shoe size of a player

function teamColors(teamName) {
    let object = gameObject();
    for (let team in object) {
        if (object[team]["teamName"] === teamName) {
            return object[team]["colors"];
        }
    }
}
console.log(teamColors("Brooklyn Nets"));  //logs ["Black", "White"]


function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
console.log(teamNames());  //logs ["Brooklyn Nets", "Charlotte Hornets"]

// Function to get the names of both teams
// Function to get the stats of a player

function playerStats(playerName) {
    const game = gameObject();
    const allPlayers = { ...game.home.players, ...game.away.players };

    return allPlayers[playerName];
}
console.log(playerStats("Alan Anderson"));  //logs stats for Alan Anderson
