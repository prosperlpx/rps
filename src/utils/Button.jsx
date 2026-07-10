export default function Button({
    btnVal,
    btnStyle,
    handleClick
}){
    return<button
        style={btnStyle}
        onClick={handleClick}
        className={btnVal == 'Rules' ? 'sm:self-end' : ''}
    >
        {btnVal}
    </button>
}