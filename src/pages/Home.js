import React, { Component } from 'react';
import CreatePost from '../components/CreatePost';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends Component {
  state = {
    listOfSecrets: []
  }
  render() {
    
    return (
      <div>
          <CreatePost/>
      <div>


      </div>
      {this.state.listOfSecrets.map( (secret) => {
        return(
          <div className="secret-map" key={secret._id}> 
          <Link>
          <p> {secret.text}</p>
          </Link>
          </div>
        )
      })}


      </div>
    )
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/post')
    .then( (response) => {
      this.setState({ listOfSecrets: response.data })
    })
    .catch( (err) => console.log(err));
  }
}

export default Home;