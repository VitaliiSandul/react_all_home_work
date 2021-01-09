import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';
import logo from './images/starwars.jpg'

class App extends React.Component {
    
    render() {
      return (
        <main className="elem text-center">
           <h1>Star Wars start page</h1>
           <div>
              <img src={logo} className="elem"/>
           </div>
        </main>
    )
  }
}

export default App