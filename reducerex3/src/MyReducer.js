export const initTodos = [
    {
        //객체배열형태
        id:1, 
        title:'Todo1',
        count:0,
        complete:false
    },
    {
        //객체배열형태
        id:2, 
        title:'Todo2',
        count:0,
        complete:true
    },
    {
        //객체배열형태
        id:3, 
        title:'Todo3',
        count:0,
        complete:true
    },
]

export const myReducer = (state, action) => {
    switch(action.type) {
        case "COMPLETE" : 
            return state.map(todo => {
                if(todo.id === action.id) 
                    return {...todo, complete: !action.complete}
                else return todo;
            })

        case "INCREMENT" : 
            return state.map(todo => {
                if(todo.id === action.id) 
                    return {...todo, count: (todo.count)+1}
                else return todo;
            })
        
        default : return state;
    }
}