import React, { Component } from 'react';
import './Home.css';
import CreatePost from '../components/CreatePost';
import axios from 'axios';
import {Link} from 'react-router-dom';
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

  render() {
    
    console.log("this.props", this.props)

    return (
      <div>
          <CreatePost getAllSecret={this.getAllSecret}/>
      <div>


      </div>
      {this.state.listOfSecrets.map( (post) => {
        return(
          <div style={{width:150, height: 150, backgroundColor: 'azure', position: "relative"}} key={post._id}>

          <Link to={"/api/post/" + post._id}>

          <p> {post.text}</p>

          <button> Comment</button>
          </Link>

      
          </div>
          
        )
        
      })}

     
      </div>
    )
  }


  
}

export default withAuth(Home);