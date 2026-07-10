import { rock, paper, scissors } from "../utils/imageExports"

var btnGlobalStyle = {
    borderRadius: '50%',
}

const btnStyle = {
    rock: {
        backgroundColor: 'red',
        borderRadius: btnGlobalStyle.borderRadius,
        padding: '12px'
    },
    paper: {
        backgroundColor: 'var(--blue-500)',
        borderRadius: btnGlobalStyle.borderRadius,
        padding: '12px'
    },
    scissors: {
        backgroundColor: 'var(--gold)',
        borderRadius: btnGlobalStyle.borderRadius,
        padding: '12px'
    }
}

export default function StartGame({
    handleScore
}){
    const {rock: rockStyle, paper: paperStyle, scissors : scissorsStyle} = btnStyle;

    return(
        <div>
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
                   className="bg-white p-4 w-20 h-20 rounded-full"
                   />
                </button>
                )
            })}
        </div>
    )
}