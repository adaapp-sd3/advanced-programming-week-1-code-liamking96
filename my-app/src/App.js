import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Task from './tasks/Task';

const dummyTaskData = [
  {
    title: "Slow Down",
    description: "When leading from the front, you cannot go too slow"
  },
{
  title: "Provide stretch exercise",
  description: "Ensure all students have meaningful, challenging work to do."
},
{
  title: "Provide actual strecth exercise",
  description: "It is important to do this when coding."
}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
        {/* <Task title= "Slow down" />
        <Task title= "Provide stretch exercise" />
        <Task title= "Provide actual strecth exercise" /> */}
        </section>
      </div>
    );
  }
}

export default App;
