import React from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }    
    
    render() {
        
        return (            
            <div className="todoelem">
                <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.changeState(this.props.item.id)}/>
                <span style={{textDecoration: this.props.item.completed ? "line-through" : "none"}}>{this.props.item.text}</span>
            </div>
        )    
    }
}

export default TodoItem