export default function Component5({user}) {
    return(
        <>
            <h1>Component5</h1>
            <h2>{`Hello, ${user} again!`}</h2> 
            {/* component1부터 user를 계속 내려주는 방법이 있고, 다른 방법있음 */}
        </>
    )
}