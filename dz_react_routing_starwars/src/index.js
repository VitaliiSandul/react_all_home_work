import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import App from './App';
import People from './People';
import Films from './Films';
import Planets from './Planets';
import Starships from './Starships';
import Vehicles from './Vehicles';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'

const html = (  
  <div>
      <Router>  
        <div className="elem elem-center">
          <div>
            <Button variant="outline-primary" className="btn-custom">
              <Link to='/'>Start page</Link>
            </Button>
            <Button variant="outline-primary" className="btn-custom">
              <Link to='/people'>People</Link>
            </Button>
            <Button variant="outline-primary" className="btn-custom">
              <Link to='/films'>Films</Link>
            </Button>
            <Button variant="outline-primary" className="btn-custom">
              <Link to='/planets'>Planets</Link>
            </Button>
            <Button variant="outline-primary" className="btn-custom">
              <Link to='/starships'>Starships</Link>
            </Button>
            <Button variant="outline-primary" className="btn-custom">
              <Link to='/vehicles'>Vehicles</Link>
            </Button>
          </div>
        </div>

        <Route path='/' exact component={App}></Route>      
        <Route path='/people' exact component={People}></Route>
        <Route path='/films' exact component={Films}></Route>
        <Route path='/planets' exact component={Planets}></Route>
        <Route path='/starships' exact component={Starships}></Route>
        <Route path='/vehicles' exact component={Vehicles}></Route>
      </Router>
  </div>
  
)

ReactDOM.render(html, document.getElementById('root'))
