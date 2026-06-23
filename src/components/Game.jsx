import {ButtonPick, Result, runGame} from "../exports";
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import lizard from '../images/icon-lizard.svg'
import spock from '../images/icon-spock.svg'
import bgImg from '../images/bg-pentagon.svg'
import { useState } from "react";

export default function Game({ResetBtn, setToggleRules, setScore, score}){
    const gamePlayArr = ['rock', 'paper', 'scissors', 'lizard', 'spock'] //this is the arr that is preminent for this game
    const [hasUserPicked, setHasUserPicked] = useState(false);
    
    // this is for user
    const [resultBgColor, setResultBgColor] = useState('');
    const [resultImg, setResultImg] = useState();

    // this is for computer 
    const [comImg, setComImg] = useState('');

    function runScore(userPick, comPick){
        if(userPick === gamePlayArr[0] && comPick === gamePlayArr[3] || userPick === gamePlayArr[0] && comPick === gamePlayArr[2]) return true

        if(userPick === gamePlayArr[1] && comPick === gamePlayArr[0] || userPick === gamePlayArr[1] && comPick === gamePlayArr[4]) return true

        if(userPick === gamePlayArr[2] && comPick === gamePlayArr[1] || userPick === gamePlayArr[2] && comPick === gamePlayArr[3]) return true

        if(userPick === gamePlayArr[3] && comPick === gamePlayArr[4] || userPick === gamePlayArr[3] && comPick === gamePlayArr[1]) return true

        if(userPick === gamePlayArr[4] && comPick === gamePlayArr[2] || userPick === gamePlayArr[4] && comPick === gamePlayArr[0]) return true
    }

    const comPick = runGame(gamePlayArr) // gets comp pick
    function startGame(e){
        setHasUserPicked(true) // starts the game 

        setResultImg(getResultImg(e.target.alt)) //sets the img and alt to resultImg from the returned getResultImg
        
        setResultBgColor(getBgColor(e.target.alt)) //sets the bg for user btn

        // this is for computer
        setComImg(getResultImg(runGame(gamePlayArr)))

        var win = runScore(e.target.alt, comPick);

        if(win){
            setScore(score +1)
        }
    }

    function getImg(num){
        if(num === 0) return rock;
        if(num === 1) return paper;
        if(num === 2) return scissors;
        if(num === 3) return lizard;
        if (num === 4) return spock
    }

    var Button = gamePlayArr.map((item, index) => {
        return <ButtonPick 
                startGame={startGame}
                img={getImg(index)}
                alt={item}
                bgColor={getBgColor(item)}
                styleName={item}
                key={item}
            />
    })

    function getBgColor(whichBg){
        if(whichBg == 'rock') return 'var(--red-600)';
        if(whichBg == 'paper') return 'var(--blue-500)';
        if(whichBg == 'scissors') return 'var(--gold)';
        if(whichBg == 'lizard') return 'var(--purple-600)';
        if(whichBg == 'spock') return 'var(--light-blue)';
    }

    return(
        <section
            className={!hasUserPicked ? 'showBg' : 'noBg'}
        >
            <div id="gameCont">
                {/* if user has not picked show this... */}
                {!hasUserPicked && Button}

                {/* if user has picked show this... */}
                {hasUserPicked && <Result 
                    resultImg={resultImg}
                    bgColor={resultBgColor}
                    comImg={comImg}
                    comBgColor={getBgColor(comPick)}
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