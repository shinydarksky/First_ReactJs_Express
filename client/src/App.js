import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
class App extends React.Component{
  state = {
    greating:''
  }
  componentDidMount(){
    axios.get('/api/helloworld')
      .then(result => {
        this.setState({greating:result.data.sayHi})
        this.text = this.state.greating
      })
    axios.get('/api/helloworld2')
      .then(result => this.setState({greating:this.text+result.data.sayHi}))
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Code Json in Express API/HELLOWROLD
          </p>
          <p><code>{this.state.greating}</code> </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
  
}

export default App;
