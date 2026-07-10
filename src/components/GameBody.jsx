import {Button, StartGame} from '../utils/exports'

export default function GameBody({
    setShowRules,
    handleScore,
    getYourPick //remember this
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
        <div className='flex flex-col sm:flex-row items-center justify-center sm:items-start  gap-50 py-24 h-125'>
            <StartGame 
                getYourPick={getYourPick}
                handleScore={handleScore}
            />

            <Button 
                btnVal={'Rules'}
                btnStyle={btnStyle}
                handleClick={handleClick}
            />
        </div>
    )
}