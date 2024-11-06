//로그인 정보를 세션에 저장하기 위한 리듀서 생성
export const initState = {
    user : {
        id : '',
        password : '',
        name : '', 
        nickname : '',
        email : '', 
        address : '',
        profileImage : '',
        profileImageStr:''
    },
}

export const totoReducer = (state = initState, action) => {
    switch(action.type) {
        case "USER" : return {...state, user:{...action.data}};
        default : return state;
    }
}