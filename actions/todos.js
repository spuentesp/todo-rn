import axios from 'axios';

const apiUrl = 'http://10.0.2.2:3000/todos';

export const addTodo = (id,title,text) => {
    return (dispatch) => {
        axios.post(apiUrl, {
            id: id,
            title: title,
            text: text
        }).then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(() => dispatch(addTodoStore(id)))
            .catch((error) => {throw Error(error)});
    };
};

export const addTodoStore = (title,text) => {
    return {
        type: 'ADD_TODO',
        title,
        text
    };
};

export function deleteTodo(id) {
    return (dispatch) => {
        axios.delete(`${apiUrl}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(() => dispatch(removeTodo(id)))
            .catch((error) => {throw Error(error)});
    };
}

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};


export const fetchTodosSuccess = (todos) => {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        todos
    }
};
//Async Action
export const fetchTodos = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchTodosSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const setTodos = (todos) => {
    return {
        type: 'SET_TODOS',
        todos
    };
};