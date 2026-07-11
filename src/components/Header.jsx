import { useState, useEffect} from "react"

export default function  Header({
    logo,
    yourScore
}){
    const [score, setScore] = useState();

    useEffect(showScore, [yourScore])
    
    // on load of this page delay for some time before showing comPick and the other results

    function showScore(){
        const timeId = setTimeout(() => setScore(yourScore), 1000)
    }

    return(
        <div
            className="flex items-center border rounded-lg w-[90%] sm:w-150 m-auto mt-12 p-4 justify-between"
        >
            <img src={logo} alt="logo" style={{
                width: '100px'
            }}/>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'white',
                    padding: '12px 20px',
                    borderRadius: '0.6rem',
                    color: 'black'
                }}
            >
                <p>SCORE</p>
                <h1
                    className="text-3xl"
                >{score}</h1>
            </div>
        </div>
    )
}