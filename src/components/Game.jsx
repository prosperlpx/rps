import { useEffect } from "react"
import { Header, GameBody} from "../utils/compExports"
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
    
    function handleClick(){
        setYourScore(prev => prev +1)
    }

    return(
        <div id="game">
            <Header 
                logo={logo}
                yourScore={yourScore}
            />

            <GameBody />

            <button
                onClick={handleClick}
            >
                click
            </button>
            
        </div>
    )
}