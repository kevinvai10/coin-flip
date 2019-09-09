import React from 'react'

class Todo extends React.Component{
    constructor(){
        super();
        this.state= {
            todos: [
                {
                    something: '',
                    id: 1,
                }
            ]
        }
        this.completeTodo = this.completeTodo.bind(this);
    }

    completeTodo(id){
        const newTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                //make a copy of the todo object with done set to true
                return {...todo, done: true}
            }
            return todo;
        })
        this.setState({
            todos: newTodos
        });
    }
}