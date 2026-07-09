/*
    this is it this function collects your pick and opponent pick compares them together and returns who wins or if it is a tie
*/

export default function whoWins(yourPick, opponetPick, gameObj) {
    // destructured pick item from the obj
    const {rock, paper, scissors} = gameObj;

    // this tells if it is a tie
    if(yourPick === opponetPick && "tie") return 'tie';

    // this tells if you win
    if(yourPick == rock && opponetPick == scissors || yourPick == scissors && opponetPick == paper || yourPick == paper && opponetPick == rock) return 'win';

    // this tells that you lose
    return 'lose'
}
