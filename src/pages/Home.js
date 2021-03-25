import React, { Component } from 'react';
import './Home.css';
import CreatePost from '../components/CreatePost';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';
import {withAuth} from './../context/auth-context';


class Home extends Component {
  state = {
    listOfSecrets: []
  }

  getAllSecret = () => {
    axios.get('http://localhost:5000/api/post')
    .then( (response) => {
      this.setState({ listOfSecrets: response.data })
    })
    .catch( (err) => console.log(err));
  }

  componentDidMount() {
    this.getAllSecret()
  }

  // style={{width:150, height: 150, backgroundColor: 'azure', position: "relative"}} key={post._id}

  render() {

    return (
      <div className="wholePage">
        <CreatePost getAllSecret={this.getAllSecret}/>
      <div>
      

      </div>

      <div className="post-cont">
      {this.state.listOfSecrets.map( (post) => {
        return(
          
          <div className="square">

          

          <p className="secret-message"> {post.text}</p>

          <NavLink to={"/api/post/" + post._id}>
          
          <button> Comment</button>
          </NavLink>

      
          </div>
          
        )
        
      })}

      </div>

      </div>
    )
  }


  
}

export default withAuth(Home);