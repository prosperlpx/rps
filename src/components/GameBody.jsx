import {Button, StartGame} from '../utils/exports'

export default function GameBody({
    setShowRules,
    getYourPick //remember this
}){
    const btnStyle = {
        padding: '5px',
        borderRadius: '8px',
        color: 'white',
        border: '2px solid white',
        cursor: 'pointer'
    }

    function handleClick(){
        setShowRules(true)
    }
    return(
        <div>
            <StartGame 
                getYourPick={getYourPick}
            />

            <Button 
                btnVal={'Rules'}
                btnStyle={btnStyle}
                handleClick={handleClick}
            />
        </div>
    )
}