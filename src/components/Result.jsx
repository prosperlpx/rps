import {Button} from "../utils/exports"
import { BtnPick } from "./StartGame"

export default function Result({
    yourPick,
    scoreInfo,
    setIsBtnPicked,
    oppPick
}){
    function playAgain(){
        setIsBtnPicked(false)
    }
    console.log(`you picked ${yourPick}\n com picked ${oppPick}`)
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
                    {BtnPick(oppPick)}
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