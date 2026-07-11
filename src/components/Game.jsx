import { useEffect } from "react";
import { Header, GameBody, whoWins, Button} from "../utils/exports";
import { logo } from "../utils/imageExports";
import { useState } from "react";

export default function Game({
  setShowRules
}) {
  // if localstorage is not set yet, set the state to zero if it is set, convert to a number and save to our state which is rendered in our component
  const [yourScore, setYourScore] = useState(+localStorage.score || 0);
  const [isBtnPicked, setIsBtnPicked] = useState(false)
  const [yourPick, setYourPick] = useState('');
  const [oppPick, setoppPick] = useState('');
  const [scoreInfo, setScoreInfo] = useState();

  // this handles the effect change on storeScore
  useEffect(() => {
    localStorage.score = yourScore;
  }, [yourScore]);

  const gameObj = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
  };

  function getComPick(){
    var gameArr = Object.values(gameObj); // returned value from the obj as an arr
    const genRand = Math.floor(Math.random() * gameArr.length);
    let comPick =gameArr[genRand];

    return comPick
  }

  
  function handleScore(e) {
    setIsBtnPicked(true)
    // only when user clicks a btn the whoWinns fnc runs and saves it result in a variable to be used
    let pick = (e.target.alt || e.target.id); //gets your pick
    let comPick = getComPick();
    let result =  whoWins(pick, comPick, gameObj);
    setScoreInfo(result)
    
    setYourPick(pick)
    setoppPick(comPick)
    getScore()

    function getScore(){
      if (result === "win") setYourScore(yourScore + 1);

      // if it is zero or less set it to zero
      if (result === "lose"){
        if(yourScore <= 0) setYourScore(0) 
        else setYourScore(yourScore - 1)
      }
    }
  }

  
  return (
    <div id="game">
      <Header logo={logo} yourScore={yourScore} />

      <GameBody 
        setShowRules={setShowRules}
        handleScore={handleScore}
        isBtnPicked={isBtnPicked}
        setIsBtnPicked={setIsBtnPicked}
        yourPick={yourPick}
        oppPick={oppPick}
        scoreInfo={scoreInfo}
      />

    </div>
  );
}


