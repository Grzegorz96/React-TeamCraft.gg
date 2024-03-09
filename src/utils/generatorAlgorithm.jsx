// Function to generate teams without ratings.
export const generateWithoutRatings = (
    playerslist,
    teamsNumber,
    playersPerTeam
) => {
    // Create a deep copy of the players list and shuffle it.
    const shuffledList = JSON.parse(JSON.stringify(playerslist));
    shuffleArray(shuffledList);

    // Initialize an array to store teams.
    const teams = [];

    // Divide the shuffled list into teams and initialize player stats.
    for (let i = 0; i < teamsNumber; i++) {
        const team = shuffledList.slice(
            i * playersPerTeam,
            (i + 1) * playersPerTeam
        );
        const players = team.map((player) => {
            return {
                ...player,
                playerRating: null,
                stats: {
                    kills: null,
                    deaths: null,
                    assists: null,
                },
            };
        });
        teams.push({ players: players, teamName: "", isWinner: false });
    }

    return teams;
};

// Function to generate teams with ratings.
export const generateWithRatings = (playersList, teamsNumber) => {
    // Sort players by rating in descending order.
    const sortedDescendingList = JSON.parse(JSON.stringify(playersList)).sort(
        (a, b) => b.playerRating - a.playerRating
    );

    // Shuffle players with the same rating.
    const sortedAndShuffledPlayers =
        shufflePlayersWithSameRating(sortedDescendingList);

    // Distribute players into teams with a zigzag pattern.
    let teams = new Array(teamsNumber).fill().map(() => []);

    let direction = 1;
    for (let i = 0; i < sortedAndShuffledPlayers.length; i++) {
        let teamIndex = i % teamsNumber;

        // Adjust team index in a zigzag pattern.
        if (direction === -1) {
            teamIndex = teamsNumber - 1 - teamIndex;
        }

        // Assign players to their respective teams.
        teams[teamIndex].push(sortedAndShuffledPlayers[i]);

        // Change direction of team assignment after each round.
        if (i > 0 && (i + 1) % teamsNumber === 0) {
            direction *= -1;
        }
    }

    // Assign missing values to teams, shuffle players within each team, and shuffle the teams.
    teams = teams
        .map((team) => {
            return {
                players: team
                    .map((player) => {
                        return {
                            ...player,
                            stats: {
                                kills: null,
                                deaths: null,
                                assists: null,
                            },
                        };
                    })
                    .sort(() => Math.random() - 0.5),
                teamName: "",
                isWinner: false,
            };
        })
        .sort(() => Math.random() - 0.5);

    return teams;
};

// Function to shuffle players with the same rating.
const shufflePlayersWithSameRating = (sortedPlayers) => {
    const playersMap = new Map();

    // Group players by rating in a Map.
    sortedPlayers.forEach((player) => {
        const rating = player.playerRating;
        if (!playersMap.has(rating)) {
            playersMap.set(rating, [player]);
        } else {
            playersMap.get(rating).push(player);
        }
    });

    // Shuffle each group of players independently.
    playersMap.forEach((playerList) => {
        if (playerList.length > 1) {
            shuffleArray(playerList);
        }
    });

    // Flatten the shuffled groups into a single array.
    const sortedAndShuffledPlayers = Array.from(playersMap.values()).flat();

    return sortedAndShuffledPlayers;
};

// Function to shuffle the array using the Fisher-Yates algorithm.
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
