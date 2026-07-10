import { BtnPick } from "./StartGame"

export default function Result({
    yourPick,
    oppPick,
    pickImg,
    oppImg,
    scoreInfo
}){
    return(
        <>
            {BtnPick('paper')}
            {BtnPick('scissors')}
        </>
    )
}