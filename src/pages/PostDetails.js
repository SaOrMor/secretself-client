import React, { Component } from 'react';
import axios from 'axios';
import {withAuth} from './../context/auth-context';
import EditPost from '../components/EditPost';

class PostDetails extends Component {
    state = {
        post: [],
        cText: "",
        editText: "",
        showForm: true
    }

    getComments = () => {

        const postId = this.props.match.params.id

        axios.get(`http://localhost:5000/api/post/${postId}`, {withCredentials: true})

        .then((response) => {
            this.setState({ post: response.data})
        }
        )
        
        .catch( (err) => {console.log(err)
        }   
        )}

    

    componentDidMount() {
        this.getComments()
    }

    deletePost = () => {
        const postId = this.props.match.params.id;
        axios.delete(`http://localhost:5000/api/post/${postId}`, {withCredentials: true})
        .then((response) => {
            console.log("post deleted response", this.props)
            this.props.history.goBack()
        }
        )
        .catch( (err) => { console.log(err) })
    }

    handleChange = (event) => {
        
        const { name, value } = event.target;

        this.setState( { [name]: value } )
        console.log(event.target)
    }


    commentPost = () => {
        const postId = this.props.match.params.id;
        const cText = this.state.cText;

        axios.post(`http://localhost:5000/api/post/${postId}/comment`, {cText},
        
        {withCredentials: true} )

        .then( () => {
            this.getComments()
            console.log("comments request sent")

            this.setState( {cText: ""})
        }).catch((err) => {
            console.log(err)
        })
      }

      toggleForm = () => {
        this.setState( {showForm: !this.state.showForm } )
      }


      handleEditSubmit = (e) => {
        
        e.preventDefault()
        const postId = this.props.match.params.id;
        const text = this.state.post.text;
        const editText = this.state.post.editText;
        console.log("event", e.target)
        axios.put(`http://localhost:5000/api/post/${postId}`, {text},
        {withCredentials: true} )
        .then( (response) => {
            
           this.setState( {text: editText} )

           console.log("response", response)

        }).catch( (err) => {
            console.log(err)
        })
      }

    
    render() {        
        return (
            <div>
                       
                {  this.state.showForm ? 
                   <h2> {this.state.post.text}</h2> 
                    :
                    <EditPost text={this.state.post.text} 
                    handleEditSubmit={this.handleEditSubmit}
                    editText={this.state.editText}
                    />
                }



                <div>
                    {this.state.post.comments && this.state.post.comments.map( (comments) => {
                        return(
                            <div key={comments._id}>

                        <p>{comments.cText}</p>

                        </div>
                        )
                        
                    })}

                
                </div>


                { 
                    this.props.user._id === this.state.post.user

                    ?
                    <div>

                    <button onClick={this.deletePost}>
                    Delete post</button>

                    <button onClick = {this.toggleForm}>
                    
                    edit post </button>
                    </div>




                    : null

                }
                


                <form>

                <textarea type="text" 
                name ="cText" 
                onChange={this.handleChange} 
                value = {this.state.cText}/>
                <button onClick={this.commentPost}> Comment </button>

                </form>
                
                
            </div>
        )
    }
}

export default withAuth(PostDetails);