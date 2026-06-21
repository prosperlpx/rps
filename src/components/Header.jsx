export default function Header({score, logo}){
    return(
        <nav
            id="nav"
            className="flex"
        >
            <img src={logo} alt='logo'/>
            <div>
                <small>
                    SCORE
                </small>
                <h1>
                    {score}
                </h1>
            </div>
        </nav>
    )
}