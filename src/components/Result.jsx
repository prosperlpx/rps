import ButtonPick from "./ButtonPick"
import { rock } from "../imagesExport";

export default function Result(
    {
        resultImg,
        bgColor,
        result,
        comImg,
        comBgColor,
        setHasUserPicked
    }
    
){
    const {alt, img} = resultImg;
    
    return(
        <div id="result"
        >
            <div className="user_pick flex flex-col justify-center items-center gap-5"
            >
                <ButtonPick 
                    img={img ?? rock}
                    alt = {alt ?? 'rock'}
                    bgColor={bgColor}
                />

                <h2>YOU PICKED</h2>
            </div>

            <div className="ser_pick flex flex-col justify-center items-center gap-5">
                <ButtonPick 
                    img={comImg.img}
                    alt = {comImg.alt}
                    bgColor={comBgColor}
                    // styleName ={styleName}
                /> 
                <h2>COM PICKED</h2>
            </div>

                <p
                    style={{
                        fontSize: '32px',
                        textAlign: 'center',
                        margin: 'auto'
                    }}
                >{result}</p>
            <button
                onClick={() => setHasUserPicked(false)}
                style={{
                    background: `linear-gradient(${bgColor}, ${comBgColor})`, //this generates a linear gradient for this component from the prop passed
                    width: 'fit-content',
                    margin: 'auto',
                    padding: '8px',
                    fontSize: '18px'
                }}
                className=" col-span-2"
            >
                Play again
            </button>
        </div>
    )
}