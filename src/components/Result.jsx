import ButtonPick from "./ButtonPick"
import { rock } from "../imagesExport";
import { useState } from "react";

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
    const btnStyle = {
        backgroundColor: `${bgColor}`, //this generates a linear gradient for this component from the prop passed
        width: 'fit-content',
        margin: 'auto',
        padding: '8px',
        fontSize: '18px'
    }
    

    const [comImgVal, setComImgVal] = useState();
    const [showResult, setShowResult] = useState();
    const [playAgain, setPlayAgain] = useState();

    const timerId = setTimeout(() => {
        setComImgVal(comImg.img);
        setShowResult(result);
        setPlayAgain('Play again')
    }, 2000);
    timerId;

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
               
                    img={ //write a fnc that returns this value but takes time to do that 
                        comImgVal
                    }
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
                >{showResult}</p>
                
            {!playAgain ? '' 
                : 
                <button
                    onClick={() => {
                        setHasUserPicked(false);
                        clearTimeout(timerId)
                    }}
                    style={btnStyle}
                    className=" col-span-2"
                >
                    {playAgain}
                </button>
            }
        </div>          
    )
}
