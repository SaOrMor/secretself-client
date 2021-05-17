import React, { Component } from 'react';
import './Home.css';
import CreatePost from '../components/CreatePost';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {withAuth} from './../context/auth-context';


class Home extends Component {
  state = {
    listOfSecrets: [],
    showCreatePost: false
  }

  getAllSecret = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/post`)
    .then( (response) => {
      this.setState({ listOfSecrets: response.data })
    })
    .catch( (err) => console.log(err));
  }

  showForm = () => {
    this.setState( { showCreatePost: !this.state.showCreatePost} )
  }

  componentDidMount() {
    this.getAllSecret()
  }

  // style={{width:150, height: 150, backgroundColor: 'azure', position: "relative"}} key={post._id}

  render() {

    return (

<div>
      <div className="coloredBack">

      { this.state.showCreatePost ?

      <div className="wholePage">
        <CreatePost getAllSecret={this.getAllSecret} showForm={this.showForm}/>
      </div>

      : <button onClick={this.showForm} className="moreButton"> + </button>}

        
      </div>

      <h3 className="paragraph"> Tell your secret to everyOne and to no one.</h3>

      <div className="post-cont">
      
      {this.state.listOfSecrets.reverse().map( (post) => {
        return(
          
          
          <div className="square">

          <p className="secret-message"> {post.text}</p>

          <NavLink to={"/api/post/" + post._id}>
          
          <button className="commButt"> Comment</button>
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