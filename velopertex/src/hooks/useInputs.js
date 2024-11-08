//21. 커스텀 Hooks 만들기 -- 반복되는 로직을 쉽게 재사용
    // 안에서 useState, useEffect, useReducer, useCallback 등 Hooks 를 사용하여 
    // 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환

import { useState, useCallback } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    //change
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    }, []);

    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;