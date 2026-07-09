import { Header, GameBody} from "../utils/compExports"
import {logo} from '../utils/imageExports'

export default function Game(){
    return(
        <div id="game">
            <Header 
                logo={logo}
                score={0}
            />

            <GameBody />
            
        </div>
    )
}