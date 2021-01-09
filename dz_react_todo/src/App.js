import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        
        this.state = {
            todos: todosData
        }

        this.changeState = this.changeState.bind(this)
    }
    
    changeState(id) {
        this.setState(prevState => {
            const newTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                todos: newTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(x => <TodoItem key={x.id} item={x} changeState={this.changeState}/>)
        
        return (
            <div>
                {todoItems}
            </div>
        )    
    }
}

export default App