import { ButtonPick, Result, runGame } from "../exports";

// all images needed imported
import { rock, paper, scissors, lizard, spock } from "../imagesExport";

import { useState, useEffect } from "react";

export default function Game({
  ResetBtn,
  setToggleRules,
  setScore,
  score,
  runScore,
}) {
  const gamePlayArr = ["rock", "paper", "scissors", "lizard", "spock"]; //this is the arr that is preminent for this game

  const [hasUserPicked, setHasUserPicked] = useState(false); // this is responsible for what is shown on the window browser

  // this is for user
  const [resultBgColor, setResultBgColor] = useState("");
  const [resultImg, setResultImg] = useState();

  // this is for computer
  const [comImg, setComImg] = useState("");
  const [comPick, setComPick] = useState("");
  const [comBgColor, setComBgColor] = useState("");

  // the result state
  const [result, setResult] = useState("");

  // this is the function that starts the game when the btn is clicked
  function startGame(e) {
    setHasUserPicked(true); // starts the game
    let userPick = e.target.alt;

    // if users do not clilck on image and it returns undefined then this is used to get the alt from the parent div
    if (!userPick) {
      userPick = e.target.firstChild.alt || e.target.firstChild.firstChild.alt;
    }

    const userBgImg = getImg(userPick, gamePlayArr);
    const userBgCol = getBgColor(userPick);

    const comPick = runGame(gamePlayArr);
    const comBgImg = getImg(comPick, gamePlayArr);
    const comBgCol = getBgColor(comPick);

    setResultImg(userBgImg); //sets the img and alt to resultImg from the returned getImg

    setResultBgColor(userBgCol); //sets the bg for user btn

    // this is for computer
    setComImg(comBgImg);
    setComBgColor(comBgCol);

    var win = runScore(userPick, comPick);

    function getWin() {
      if (win == "win") {
        setTimeout(() => setScore(prev => prev +1), 2000); // this increases the win score by 1
        setResult("You Win 🥳");
      } else if (win == "tie") {
        setResult("It is a tie );");
      } else setResult("You lose 😔");
    }
    getWin();
  }

  // button to show if hasClicked is false and toggle so game starts
  var Button = gamePlayArr.map((item, index) => {
    var imgObj = getImg(item, gamePlayArr); //
    return (
      <ButtonPick
        startGame={startGame}
        img={imgObj.img}
        alt={imgObj.alt}
        bgColor={getBgColor(item)}
        styleName={item}
        key={item}
      />
    );
  });

  // function defined to get bg color
  function getBgColor(whichBg) {
    if (whichBg == "rock") return "var(--red-600)";
    if (whichBg == "paper") return "var(--blue-500)";
    if (whichBg == "scissors") return "var(--gold)";
    if (whichBg == "lizard") return "var(--purple-600)";
    if (whichBg == "spock") return "var(--light-blue)";
  }

  return (
    <section className={!hasUserPicked ? "showBg" : ""}>
      <div id="gameCont">
        {/* if user has not picked show this... */}
        {!hasUserPicked && Button}

        {/* if user has picked show this... */}
        {hasUserPicked && (
          <Result
            resultImg={resultImg}
            bgColor={resultBgColor}
            comImg={comImg}
            comBgColor={comBgColor}
            result={result}
            setHasUserPicked={setHasUserPicked}
          />
        )}
      </div>

      {/* ResetBtn is rendered after destructuring from the prop */}
      <ResetBtn setToggleRules={setToggleRules} styleName="triggerRules" />
    </section>
  );
}

function getImg(val, arr) {
  var img = (val) => {
    if (val == arr[0]) return rock;
    if (val == arr[1]) return paper;
    if (val == arr[2]) return scissors;
    if (val == arr[3]) return lizard;
    if (val == arr[4]) return spock;
  };

  return {
    alt: val,
    img: img(val),
  };
}
