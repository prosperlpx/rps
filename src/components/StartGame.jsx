import { rock, paper, scissors, triangleBg} from "../utils/imageExports"
import {Result} from '../utils/exports'

var btnGlobalStyle = {
    borderRadius: '50%',
}

const btnStyle = {
    rock: {
        backgroundColor: 'red',
        borderRadius: btnGlobalStyle.borderRadius,
        padding: '8px'
    },
    paper: {
        backgroundColor: 'var(--blue-500)',
        borderRadius: btnGlobalStyle.borderRadius,
        padding: '8px'
    },
    scissors: {
        backgroundColor: 'var(--gold)',
        borderRadius: btnGlobalStyle.borderRadius,
        padding: '8px'
    }
}

export default function StartGame({
    handleScore,
    isBtnPicked
}){
    const {rock: rockStyle, paper: paperStyle, scissors : scissorsStyle} = btnStyle;

    return(
        <div
            className={`sm:self-start sm:ml-32 `}
        >
            {!isBtnPicked ? 
                <div
                    id="triangle"
                    className="grid grid-cols-3 gap-8"
                >
                    {['rock','paper','scissors'].map((item) => {
                        return (
                        <button
                            id={item}
                            key={item}
                            style={item == 'rock' ? rockStyle : item == 'paper' ? paperStyle : scissorsStyle}
                            onClick={handleScore}
                        >
                        <img 
                            src={
                                item == 'rock' ? rock : item == 'paper' ? paper : scissors
                            } 
                            alt={item}
                        className="bg-white p-3 w-12 h-12 sm:w-15 sm:h-15 rounded-full"
                        />
                        </button>
                        )
                    })}
                </div>
            : <Result 
                    yourPick
                    oppPick
                    pickImg
                    oppImg
                    scoreInfo
            />
            }
        </div>
    )
}