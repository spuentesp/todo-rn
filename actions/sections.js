export const setSection = (section) => {
    if(section === 'todoList'){
        return {
            type: 'SECTION_TODO_LIST'
        };
    }else{
        return {
            type: 'SECTION_ADD_TODO'
        };
    }
};

