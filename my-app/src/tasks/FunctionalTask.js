import React, { useState } from 'react';

function Task(props) {
    let [accepted, setAccepted] = useState(false)
    return(
        <div className="Task">
        <h2>{props.title}</h2>
        <p>{props.desription}</p>
        <button onClick={handleAcceptTask}>Accept task</button>
        </div>
    )
}

export default Task;