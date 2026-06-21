import ButtonPick from "./ButtonPick"

export default function Result(
    {
        resultImg,
        bgColor,

        comImg,
    }
    
){
    const {alt, img} = resultImg;
    
    return(
        <div id="result"
            className="flex justify-center items-center"
        >
            <div className="user_pick flex flex-col justify-center items-center"
            >
                <ButtonPick 
                    img={img}
                    alt = {alt}
                    bgColor={bgColor}
                />

                <h2>YOU PICKED</h2>
            </div>

            <div className="user_pick flex flex-col justify-center items-center">
                <ButtonPick 
                    img={comImg.img}
                    alt = {comImg.alt}
                    // styleName ={styleName}
                /> 
                <h2>THE HOUSE PICKED</h2>
            </div>
        </div>
    )
}