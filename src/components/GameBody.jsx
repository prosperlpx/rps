import {Button} from '../utils/exports'

export default function GameBody(){
    const btnStyle = {
        padding: '5px',
        borderRadius: '8px',
        color: 'white',
        border: '2px solid white',
        cursor: 'pointer'
    }
    return(
        <div>
            <Button 
                btnVal={'Rules'}
                btnStyle={btnStyle}
            />
        </div>
    )
}