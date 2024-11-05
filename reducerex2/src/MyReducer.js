export const initState = {
    id : 'hong',
    nickname : 'gildong',
    subject : 'computer',
    grade : 1    
}

export const reducer = (state, action) => {
    let nState;
    switch(action.type) {
        case 'ID' : nState = {...state, id:action.data}; break;
        case 'NICKNAME' : nState = {...state, nickname:action.data}; break;
        case 'SUBJECT' : nState = {...state, subject:action.data}; break;
        case 'GRADE' : nState = {...state, grade:action.data}; break;
        default: nState = {...state};
    }
    return nState;
}