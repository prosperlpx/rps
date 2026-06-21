import ButtonPick from "./ButtonPick"

export default function Result(
    {
        resultImg,
        bgColor,

        comImg,

        setHasUserPicked
    }
    
){
    const {alt, img} = resultImg;
    
    return(
        <div id="result"
            className="justify-center items-center grid grid-cols-2 gap-22"
        >
            <div className="user_pick flex flex-col justify-center items-center gap-5"
            >
                <ButtonPick 
                    img={img}
                    alt = {alt}
                    bgColor={bgColor}
                />

                <h2>YOU PICKED</h2>
            </div>

            <div className="ser_pick flex flex-col justify-center items-center gap-5">
                <ButtonPick 
                    img={comImg.img}
                    alt = {comImg.alt}
                    // styleName ={styleName}
                /> 
                <h2>COM PICKED</h2>
            </div>

            <button
                onClick={() => setHasUserPicked(false)}
                className=" col-span-2"
            >
                play again
            </button>
        </div>
    )
}