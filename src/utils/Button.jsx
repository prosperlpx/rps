export default function Button({
    btnVal,
    btnStyle,
    handleClick
}){
    return<button
        style={btnStyle}
        onClick={handleClick}
    >
        {btnVal}
    </button>
}