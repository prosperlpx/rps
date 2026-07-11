import { Button } from "../utils/exports";
import { BtnPick } from "./StartGame";
import { useEffect, useState } from "react";

export default function Result({
  yourPick,
  scoreInfo,
  setIsBtnPicked,
  oppPick,
}) {
  const [enemyPick, setEnemyPick] = useState();
  const [scoreResult, setScoreResult] = useState();
  const [playAgainBtn, SetPlayAgainBtn] = useState();

  const score =
    "YOU " +
    scoreInfo.toUpperCase() +
    `${scoreInfo == "win" ? "🥳" : scoreInfo == "lose" ? "😔" : "➰"}`;

  function playAgain() {
    setIsBtnPicked(false);
  }

  useEffect(setComPick, []);

  // on load of this page delay for some time before showing comPick and the other results
  function setComPick() {
    const timeId = setTimeout(() => {
        setEnemyPick(BtnPick(oppPick))
        setScoreResult(score)
        SetPlayAgainBtn('Play Again')
    }, 1000
    );
  }

  console.log(`you picked ${yourPick}\n com picked ${oppPick}`, name);
  return (
    <div className="flex flex-col items-center gap-20 mt-32 sm:mt-0">
      <div className="flex gap-24 items-center justify-center text-center">
        <div className="flex flex-col items-center gap-8">
          {BtnPick(yourPick)}
          <p>YOU PICKED</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          {enemyPick}
          <p>THE HOUSE PICKED</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-center pb-4 text-3xl">{scoreResult}</p>
        <Button
          btnVal={playAgainBtn}
          btnStyle={playAgainBtn &&{
            backgroundColor: "white",
            padding: "8px 12px",
            color: "black",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
          handleClick={playAgain}
        />
      </div>
    </div>
  );
}
