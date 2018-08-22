const sections = (state = 'todoList', action) => {
    switch (action.type) {
        case 'SECTION_ADD_TODO':
            state = 'addTodo';
            console.log('yay reducer addtodo')
            return state;
        case 'SECTION_TODO_LIST':
            state = 'todoList';
            console.log('yay reducer todolist')
            return state;
        default:
            return state
    }
}
export default sections