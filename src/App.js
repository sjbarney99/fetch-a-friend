import React, {Component} from 'react';
import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import {Provider} from 'react-redux';
import store from './Ducks/store';



class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
      .then((response) => {
        console.log(response.data)
      })
  }
  render(){
    return(
      <Provider store={store}>
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