import React, { Component } from 'react';
import axios from 'axios';

class CreatePost extends Component {
    state = {
        text:"",
        image: ""
    }

    handleFormSubmit = (event) => {
        
        console.log(event.currentUser, "event")

        event.preventDefault();

        const {text, image} = this.state;

        axios.post('http://localhost:5000/api/post', { text, image } )
        .then(() => {
            console.log("request sent")
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
            <div>
                <form onSubmit= {this.handleFormSubmit}>
                    <label> Post</label>
                    <textarea type="text" name="text" 
                    onChange={this.handleInput} 
                    value= {this.state.text} />

                    <button type="submit">Send text</button>
                </form>
            </div>
        )
    }
}


export default CreatePost;