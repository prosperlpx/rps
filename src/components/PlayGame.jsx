export default function PlayGame({children}){
    return (
        // got the prop from children within the component and rendered as children here
        <main
            id="playGame"
        >
            {children}
        </main>
    )
}