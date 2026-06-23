export default function runScore(userPick, comPick) {
    var win = userWin(userPick, comPick);
    if(userPick == comPick) return 'tie';
    if(win) return 'win'
    return 'lose'
}

function userWin(user, com){
    // rock
    if(user == 'rock' && com == 'scissors' || com == 'lizard') return true

    // paper
    if(user == 'paper' && com == 'rock' || com == 'spock') return true

    // scissors
    if(user == 'scissors' && com == 'rock' || com == 'lizard') return true

    // scissors
    if(user == 'lizard' && com == 'spock' || com == 'paper') return true

    // scissors
    if(user == 'spock' && com == 'scissors' || com == 'rock') return true
}