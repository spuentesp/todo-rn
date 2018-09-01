let nextTodoId = 0;

export const addTodo = (title,text) => {
    return {
        type: 'ADD_TODO',
        title,
        text
    };
};

export const deleteTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};

export function removeTodo(id) {
    return (dispatch) => {
        axios.delete(`http://10.0.2.2:3000/todos/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(() => dispatch(deleteTodo(id)))
            .catch((error) => {throw Error(error)});
    };
}


export const getTodos = () => {
    console.log('pasa por action');
    return {
        type: 'GET_TODOS'
    };
};
