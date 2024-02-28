export const generateWithoutRatings = (
    playerslist,
    teamsNumber,
    playersPerTeam
) => {
    const shuffledList = JSON.parse(JSON.stringify(playerslist));
    shuffleArray(shuffledList);
    const teams = [];

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

export const generateWithRatings = (playersList, teamsNumber) => {
    const sortedDescendingList = JSON.parse(JSON.stringify(playersList)).sort(
        (a, b) => b.playerRating - a.playerRating
    );

    // Przetasowanie graczy o tym samym ratingu
    const sortedAndShuffledPlayers =
        shufflePlayersWithSameRating(sortedDescendingList);

    let teams = new Array(teamsNumber).fill().map(() => []);

    let direction = 1; // Kierunek: 1 - od lewej do prawej, -1 - od prawej do lewej
    for (let i = 0; i < sortedAndShuffledPlayers.length; i++) {
        let teamIndex = i % teamsNumber;

        if (direction === -1) {
            teamIndex = teamsNumber - 1 - teamIndex; // Zmiana kierunku
        }

        teams[teamIndex].push(sortedAndShuffledPlayers[i]);

        // Zamiana kierunku po przejściu przez wszystkie drużyny
        if (i > 0 && (i + 1) % teamsNumber === 0) {
            direction *= -1;
        }
    }

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

const shufflePlayersWithSameRating = (sortedPlayers) => {
    const playersMap = new Map();

    // Grupowanie graczy według ratingu
    sortedPlayers.forEach((player) => {
        const rating = player.playerRating;
        if (!playersMap.has(rating)) {
            playersMap.set(rating, [player]);
        } else {
            playersMap.get(rating).push(player);
        }
    });

    // Przetasowanie graczy o tym samym ratingu
    playersMap.forEach((playerList) => {
        if (playerList.length > 1) {
            shuffleArray(playerList);
        }
    });

    // Łączenie przetasowanych list w jedną listę graczy
    const sortedAndShuffledPlayers = Array.from(playersMap.values()).flat();

    return sortedAndShuffledPlayers;
};

// Funkcja do wymieszania tablicy za pomocą algorytmu Fishera-Yatesa
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
