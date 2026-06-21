import rulesImg from '../images/image-rules-bonus.svg'
import x from '../images/icon-close.svg'

export default function Overlay({handleToggle}){
    const overLayData = {
        // all static data used for the overlay component
        headingTxt: 'rules',
        img: rulesImg,
        closeBtn: x
    };

    return (
        <div id="overlay">
            <div>
                <h1>{overLayData.headingTxt}</h1>

                <img src={overLayData.img}
                className='gameRule' alt="overlay data image" />

                <button id='close-icon'
                    onClick={handleToggle}
                >
                    <img src={overLayData.closeBtn} alt="" />
                </button>
            </div>
        </div>
    )
}