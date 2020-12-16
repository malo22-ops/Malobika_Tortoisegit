import React, {Component} from 'react'; 
import todoData from './todoData';
import TodoItem from  './TodoItem';

function Todo () {
    const todoItems = todoData.map(item => <TodoItem key={item.id}  item={item}  />);

    return (
        <div class="todo-list">
            {todoItems}
        </div>
    )
}

export default Todo; 
