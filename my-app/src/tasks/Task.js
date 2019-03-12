import React, {Component} from "react";

class Task extends Component {

    constructor(){
        super()
        this.state = {
            accepted: false,
        }
    }

    handleAcceptTask=() => {
        this.setState({
            accepted: !this.state.accepted
        })
    }

    render() {
        return (
            <div className="Task Task-Accepted_true">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>

            {this.state.accepted && <p>This task has been accepted</p>}
            <button onClick={this.handleAcceptTask}>Accept Task</button>

            </div>
        )
    }
}


export default Task;