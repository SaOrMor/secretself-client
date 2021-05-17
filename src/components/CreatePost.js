import React, { Component } from 'react';
import axios from 'axios';
import './CreatePost.css';

class CreatePost extends Component {
    state = {
        text:"",
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const {text} = this.state;

        axios.post(`${process.env.REACT_APP_API_URL}/api/post`,  { text }, {withCredentials: true} )
        .then(() => {
            this.props.getAllSecret();

            this.props.showForm();

            this.setState( { text:"", image:"" } )
        })
        .catch( (err) => console.log(err))

    }
    
    handleInput = (event) => {

        const {name, value} = event.target;

        this.setState( { [name]: value } );
    }
    

    render() {
        return (
            <div className="createPost">
                <form className="postForm" onSubmit= {this.handleFormSubmit}>
                    
                    <textarea className="areaCre" type="text" 
                    name="text"
                    placeholder="What you have in mind?"
                    onChange={this.handleInput} 
                    value= {this.state.text} />
                    <button className="subBut" type="submit">Send text</button>
                </form>
                
            </div>
        )
    }
}


export default CreatePost;