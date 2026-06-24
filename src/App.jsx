// every other component lives here
import { Overlay, PlayGame, Header, Game} from "./exports"
import './App.css'
import {logo} from './imagesExport'
import { useState} from "react"
import {runScore} from './exports'

export default function App(){
    const [toggleRules, setToggleRules] = useState(true) //this is used to toggle the rules overlay 
    
    const [score, setScore] = useState(0); //used for the header component score

    return(
        <>
            { //if the set state is true then show the overlay component else do not show and show the PlayGame component
                toggleRules && 
                // overlay
                <Overlay 
                    handleToggle = {
                        () => setToggleRules(false)
                    }
                />
            }

            {
                // show the playGame coponent if the toggleRules is set to be false
                
                // main game play page
                <PlayGame> 
                    {/* we use this syntax => { } for a commnet here  because it is inside a jsx*/}
                    {/* this is a wrapper for other components*/}
                    <Header 
                        // we use this (//) because this is considered to be js code
                        score={score}
                        logo={logo}
                    />

                    <Game 
                        ResetBtn={ResetBtn} setToggleRules={setToggleRules} //reset btn is passed as a prop where as it is a jsx 
                        setScore={setScore}
                        score={score}
                        runScore={runScore}
                    />
                </PlayGame>
            }
        </>
    )
}


// this prop is coming from the parent coponent Game
function ResetBtn({setToggleRules, styleName}){
    // passed this component as a prop to the Game component
    const rulesBtn = 'RULES'
    return <button
        id="rulesBtn"
        onClick={() => setToggleRules(true)}
        className={styleName}
    >
        {rulesBtn}   
    </button>
}
