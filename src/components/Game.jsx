import { useEffect } from "react";
import { Header, GameBody, whoWins, Button} from "../utils/exports";
import { logo } from "../utils/imageExports";
import { useState } from "react";

export default function Game({
  setShowRules
}) {
  // if localstorage is not set yet, set the state to zero if it is set, convert to a number and save to our state which is rendered in our component
  const [yourScore, setYourScore] = useState(+localStorage.score || 0);

  // this handles the effect change on storeScore
  useEffect(() => {
    localStorage.score = yourScore;
  }, [yourScore]);

  function handleScore() {
    // only when user clicks a btn the whoWinns fnc runs and saves it result in a variable to be used
    const gameObj = {
      rock: "rock",
      paper: "paper",
      scissors: "scissors",
    };
    var gameArr = Object.values(gameObj); // returned value from the obj as an arr
    const genRand = Math.floor(Math.random() * gameArr.length);
    const comPick = gameArr[genRand];
    const result = whoWins('rock', comPick, gameObj);

    console.log(result)
    if (result == "win") return setYourScore((prevScore) => prevScore + 1);

    // if it is zero or less set it to zero
    if (result == "lose"){
      if(yourScore <= 0) setYourScore(0) 
      else setYourScore((prevScore) => prevScore - 1)
    }
  }

  return (
    <div id="game">
      <Header logo={logo} yourScore={yourScore} />

      <GameBody 
        setShowRules={setShowRules}
      />

      {/* <button onClick={handleScore}>click</button> */}
      
    </div>
  );
}


