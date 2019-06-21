import React, {Component} from 'react';
import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Ducks/store';



class App extends Component {
  render(){
    return(
      <Provider {...store}>
        <Router>
          <div className="app">
          {routes}
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App