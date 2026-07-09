export default function  Header({
    logo,
    yourScore
}){
    return(
        <div
            className="flex items-center border rounded-lg w-[90%] sm:w-150 m-auto mt-12 p-4 justify-between"
        >
            <img src={logo} alt="logo" style={{
                width: '100px'
            }}/>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <p>SCORE</p>
                <h1
                    className="text-3xl"
                >{yourScore}</h1>
            </div>
        </div>
    )
}