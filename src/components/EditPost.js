import React, { Component } from 'react';
// import axios from 'axios';

class editPost extends Component {
    state = {
        text:"",
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


    render() {
        return (
            <div>
                
                <form onSubmit={this.props.handleEditSubmit}>

                <input defaultValue={this.props.text} 
                name={this.props.editText} type="text"
                
                 />
                
                <button type="submit"> submit changes </button>
                
                </form>

            </div>
        )
    }
}

export default editPost;