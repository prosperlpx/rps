export default function runScore(userPick, comPick) {
  var win = userWin(userPick, comPick);
  if (userPick == comPick) return "tie";
  if (win) return "win";
  return "lose";
}

function userWin(user, com) {
  // rock
  return user == "rock" && (com == "scissors" || "lizard");

  // paper
  return user == "paper" && (com == "rock" || "spock");

  // scissors
  return user == "scissors" && (com == "rock" ||"lizard");

  // lizard
  return user == "lizard" && (com == "spock" || "paper");

  // spock
  return user == "spock" && (com == "scissors" || "rock");
}
