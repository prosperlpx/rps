import {Button} from "../utils/exports"
import { BtnPick } from "./StartGame"
import { useEffect, useState} from "react"

export default function Result({
    yourPick,
    scoreInfo,
    setIsBtnPicked,
    oppPick
}){
    const [enemyPick, setEnemyPick] = useState()
    function playAgain(){
        setIsBtnPicked(false)
    }

    useEffect(setComPick, [])

    // on load of this page delay for some time before showing comPick and the other results
    function setComPick(){
        const timeId = setTimeout(() => setEnemyPick(BtnPick(oppPick)), 1000)
    }

    console.log(`you picked ${yourPick}\n com picked ${oppPick}`, name)
    return(
        <>
            <div
                className="flex gap-24 items-center justify-center text-center"
            >
                <div
                    // className="bg-black w-16 h-15 rounded-full"
                >
                    {BtnPick(yourPick)}
                    <p>YOU PICKED</p>
                </div>

                <div
                    // className="bg-black w-16 h-15 rounded-full"
                >
                    {enemyPick}
                    <p>THE HOUSE PICKED</p>
                </div>

            </div>

            <Button 
                btnVal={'Play Again'}
                handleClick={playAgain}
            />
        </>
    )
}