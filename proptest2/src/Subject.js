function Subject({subjects}) {
    return(
        //subjects배열이므로,
        subjects.map(s => 
            <option key={s.key} value={s.key}>
                {/* key를 빼면 오류가난다 */}
                {s.text}
            </option>
        )
        // <option>
        //     <select>{subjects.key}</select>
        //     <select>{subjects.text}</select>
        // </option>
    )
}

export default Subject;