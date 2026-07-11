import {Button, StartGame} from '../utils/exports'

export default function GameBody({
    setShowRules,
    handleScore,
    isBtnPicked,
    setIsBtnPicked,
    getYourPick, //remember this
    yourPick,
    oppPick
}){
    const btnStyle = {
        padding: '5px',
        borderRadius: '8px',
        color: 'white',
        border: '2px solid white',
    }

    function handleClick(){
        setShowRules(true)
    }

    return(
        <div className='flex flex-col sm:flex-row items-center justify-center gap-30 py-24 px-4 h-125'>
            <StartGame 
                getYourPick={getYourPick}
                handleScore={handleScore}
                isBtnPicked={isBtnPicked}
                setIsBtnPicked={setIsBtnPicked}
                yourPick={yourPick}
                oppPick={oppPick}
            />

            <Button 
                btnVal={'Rules'}
                btnStyle={btnStyle}
                handleClick={handleClick}
            />
        </div>
    )
}