import React from 'react'
import BlogForm from './BlogForm';
import {connect} from 'react-redux';
import {addBlogToDatabase} from '../actions/blogs';
 
const AddBlogPage = (props) => {
    return (
        <div className="col=12 p-5">
        <div className="jumbotron ">
            <BlogForm onSubmit={(blog) => {
                props.dispatch(addBlogToDatabase(blog));
                props.history.push('/blogs');
            }}/>
        </div>
        </div>
    )
}

export default connect()(AddBlogPage);
