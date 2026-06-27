export default function ButtonPick(
    {
        startGame,
        img,
        alt,
        styleName,
        bgColor
    }
){
    return(
        <button
            id="buttonPick"
            onClick={startGame}
            className={styleName}

            style={{
                borderRadius: '50%',
                backgroundColor: bgColor
            }}
        >
            <div
                style={{
                borderRadius: '50%'
                }}
            >
                {/* {!img && ''} */}
                {img !== undefined && <img 
                    src={img}
                    alt={alt}
                    style={{
                        width: '100%'
                    }}
                />}
            </div>
        </button>
    )
}