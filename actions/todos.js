let nextTodoId = 0;

export const addTodo = (title,text) => {
    return {
        type: 'ADD_TODO',
        title,
        text
    };
};

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};
