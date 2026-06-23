import {ButtonPick, Result, runGame} from "../exports";

import {rock, paper, scissors, lizard, spock} from '../imagesExport'

import { useState } from "react";

export default function Game({ResetBtn, setToggleRules, setScore, score, runScore}){
    const gamePlayArr = ['rock', 'paper', 'scissors', 'lizard', 'spock'] //this is the arr that is preminent for this game

    const [hasUserPicked, setHasUserPicked] = useState(false);
    
    // this is for user
    const [resultBgColor, setResultBgColor] = useState('');
    const [resultImg, setResultImg] = useState();

    // this is for computer 
    const [comImg, setComImg] = useState('');
    const [comPick, setComPick] = useState('');
    const [comBgColor, setComBgColor] = useState('');
    
    
    function startGame(e){
        setHasUserPicked(true) // starts the game 
        const userPick = e.target.alt;
        const userBgImg = getResultImg(userPick);
        const userBgCol = getBgColor(userPick)

        const comPick = runGame(gamePlayArr);
        const comBgImg = getResultImg(comPick);
        const comBgCol = getBgColor(comPick);
        
        setResultImg(userBgImg) //sets the img and alt to resultImg from the returned getResultImg
        
        setResultBgColor(userBgCol) //sets the bg for user btn
        
        // this is for computer
        setComImg(comBgImg)
        setComBgColor(comBgCol)

        var win = runScore(userPick, comPick);

        // if(win){
        //     setScore(score +1) // this increases the win score by 1
        // }
        console.log(win)
    }

    // get image for button if hasclicked is false
    function getImg(item){
        if(item === 'rock') return rock;
        if(item === 'paper') return paper;
        if(item === 'scissors') return scissors;
        if(item === 'lizard') return lizard;
        if (item === 'spock') return spock
    }

    // button to show if hasClicked is false
    var Button = gamePlayArr.map((item, index) => {
        return <ButtonPick 
                startGame={startGame}
                img={getImg(item)}
                alt={item}
                bgColor={getBgColor(item)}
                styleName={item}
                key={item}
            />
    })

    // function defined to get bg color
    function getBgColor(whichBg){
        if(whichBg == 'rock') return 'var(--red-600)';
        if(whichBg == 'paper') return 'var(--blue-500)';
        if(whichBg == 'scissors') return 'var(--gold)';
        if(whichBg == 'lizard') return 'var(--purple-600)';
        if(whichBg == 'spock') return 'var(--light-blue)';
    }

    return(
        <section
            className={!hasUserPicked ? 'showBg' : ''}
        >
            <div id="gameCont">
                {/* if user has not picked show this... */}
                {!hasUserPicked && Button}

                {/* if user has picked show this... */}
                {hasUserPicked && <Result 
                    resultImg={resultImg}
                    bgColor={resultBgColor}
                    comImg={comImg}
                    comBgColor={comBgColor}
                    setHasUserPicked={setHasUserPicked}
                />}
            </div>

            <ResetBtn 
                setToggleRules={setToggleRules} styleName='triggerRules'
            />
        </section>
    )
}


function getResultImg(val){

    var img = (val) => {
        if(val == 'rock') return rock;
        if(val == 'paper') return paper;
        if(val == 'scissors') return scissors;
        if(val == 'lizard') return lizard;
        if(val == 'spock') return spock;
    }

    return{
        alt: val,
        img: img(val),
    }
}