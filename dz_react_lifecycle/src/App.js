import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          isAuthenticated: false
        }
        this.authClick = this.authClick.bind(this)
    }
    
    authClick() {
        this.setState(prevState => {
            return {
              isAuthenticated: !prevState.isAuthenticated
            }
        })
    }
    
    render() {   
        let btnText = this.state.isAuthenticated ? "LOG OUT" : "LOG IN"
        let pageText = this.state.isAuthenticated ? "Logged in" : "Logged out"
        return (
          <div className="elem">
            <div className="text-right">
                <Button variant={(this.state.isAuthenticated ? 'outline-danger' : 'outline-primary')} className="btn-custom" onClick={this.authClick}>{btnText}</Button>   
            </div>
            <p>{pageText}</p>
          </div>
        )
    }
}


export default App