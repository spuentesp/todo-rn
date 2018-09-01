const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.length,
                    title: action.title,
                    text: action.text,
                    completed: false
                }
            ]
        case 'REMOVE_TODO':
            return state.filter(todo =>
                todo.id !== action.id
            );
        case 'GET_TODOS':
            console.log('pasa x reducer');
            return state;
        default:
            return state
    }
}
export default todos
