function Department({depts}) {
    return(
        <select>
        {
            depts.map(i =>
                <option key={i.id} value={i.name}>
                    {i.name}
                </option>
            )
        }  
        </select>
    )
}
export default Department;