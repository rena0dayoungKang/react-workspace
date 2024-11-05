import { useDispatch, useSelector } from "react-redux"

const Page2 = () => {
    const data2 = useSelector(state => state.data2);
    const dispatch = useDispatch();

    return(
        <>
            <h1>{data2}</h1>
            <input type="text" onChange={(e) => dispatch({type:"INT", data:e.target.value})}/>
        </>
    )
}

export default Page2;