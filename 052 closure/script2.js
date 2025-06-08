// closure for a game, keep track of points

function scoreCounter(){
    let score = 0;
    function increasedScore(points){
        score += points;
        console.log(`+${points}pts`)
    }

    function decreasedScore(points){
        score -= points;
        console.log(`-${points}pts`)
    }

    function getScore(){
        return score;
    }

    return {increasedScore,decreasedScore,getScore};
}

const game = scoreCounter();

game.increasedScore(5);
game.increasedScore(7);
game. decreasedScore(9);
console.log(`Final score = ${game.getScore()}`); 