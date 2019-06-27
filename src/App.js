import React, {Component} from 'react';
import routes from './routes';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class App extends Component {
  componentDidMount(){
    axios.get('/api/usercheck')
      .then(response => {
        if(!response.data.success){
          this.props.history.push('/')
        }
      })
  }
  render(){
    return(
          <div className="app">
          {routes}
          </div>
    )
  }
}

export default withRouter(App)