function Department({dept}) {
    return(
        <select>
            {
                dept.map(i => 
                    <option key={i.id}>
                        {i.name}        
                    </option>
                )
            }
        </select>
    )
}
export default Department;