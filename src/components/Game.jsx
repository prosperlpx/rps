import { Header, GameBody} from "../utils/compExports"
import {logo} from '../utils/imageExports'
import { useState } from "react"

export default function Game(){
    // if localstorage is not set yet, set the state to zero
    const [yourScore, setYourScore] = useState(
        localStorage.score || 0
    )
    console.log(yourScore)
    return(
        <div id="game">
            <Header 
                logo={logo}
                yourScore={yourScore}
            />

            <GameBody />
            
        </div>
    )
}