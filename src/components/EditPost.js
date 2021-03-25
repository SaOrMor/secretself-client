import React, { Component } from 'react';
// import axios from 'axios';

class editPost extends Component {
    state = {
        text: this.props.text,
    }

     /*  handleEditSubmit = () => {

        const postId = this.props.match.params.id;
        const text = this.state.text;
        
        axios.put(`http://localhost:5000/api/post/${postId}`, {text},
        {withCredentials: true} )

        .then( (response) => {
            console.log("response", response)
            this.setState( {text: text} )
        }).catch( (err) => {
            console.log(err)
        })
    } */

    handleInput = (e) => {

        const {name, value} = e.target;

        console.log("name",name)
        console.log("value",value)

        this.setState( { [name]: value } );
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.props.handleEditSubmit}>

                <input 
                value = {this.state.text}
                name="text" type="text"
                onChange = {this.handleInput}
                 />
                
                <button type="submit"> submit changes </button>
                
                </form>

            </div>
        )
    }
}

export default editPost;