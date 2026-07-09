export default function Button({
    btnVal,
    btnStyle
}){
    return<button
        style={btnStyle}
    >
        {btnVal}
    </button>
}