import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Goods from './Goods';
import EditGood from './EditGood';
import NotFound from './NotFound';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const html = (
  <Router>
      <div>
          <Switch>
              <Route exact path="/" component={Goods} />
              <Route path="/editgood/:id" component={EditGood} />
              <Route component={NotFound} />
          </Switch>
      </div>
  </Router>
)

ReactDOM.render(html, document.getElementById('root'))
