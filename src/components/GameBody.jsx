import { useState } from "react";
import {PickBtn, GameResult, Button} from '../utils/exports'

var btnVal = 'RULES';
export default function GameBody(){
    const [hasPicked, setHasPicked] = useState(false);
    return(
        <div>
            {hasPicked ? <PickBtn /> : <GameResult />}

            <Button 
                btnVal={btnVal}
                // style={}
            />
        </div>
    )
}