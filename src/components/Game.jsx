import { useEffect } from "react"
import { Header, GameBody, whoWins} from "../utils/exports"
import {logo} from '../utils/imageExports'
import { useState } from "react"

export default function Game(){
    // if localstorage is not set yet, set the state to zero if it is set, convert to a number and save to our state which is rendered in our component
    const [yourScore, setYourScore] = useState(
        +localStorage.score || 0
    )

    // this handles the effect change on storeScore
    useEffect(() => {
        localStorage.score = yourScore
    }, [yourScore])
    
    function handleScore(){
        // only when user clicks a btn the whoWinns fnc runs and saves it result in a variable to be used
        var gameObj = {
            rock: 'rock', paper: 'paper', scissors: 'scissors'
        }
        var gameArr = Object.values(gameObj); // returned value from the obj as an arr
        const genRand = Math.floor(Math.random() * gameArr.length)
        const comPick = gameArr[genRand]
        console.log(comPick)
        const result = whoWins(yourPick, opponetPick, gameObj)
        
        if(result == 'win') setYourScore(prevScore => prevScore +1)
            
        if(result == 'lose') setYourScore(prevScore => prevScore -1)
    }

    return(
        <div id="game">
            <Header 
                logo={logo}
                yourScore={yourScore}
            />

            <GameBody />

            <button
                onClick={handleScore}
            >
                click
            </button>
            
        </div>
    )
}