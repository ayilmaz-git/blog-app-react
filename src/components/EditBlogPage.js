import React from 'react'
import BlogForm from './BlogForm'
import {connect} from 'react-redux';
import {editBlogFromDatabase,removeBlogFromDatabase} from '../actions/blogs';

const EditBlogPage = (props) => {
    return (
        <div className="col=12 p-5">
        <div className="jumbotron ">
            <BlogForm 
                blog={props.blog}
                onSubmit = {(blog) => {
                    props.dispatch(editBlogFromDatabase(props.blog.id, blog));
                    props.history.push('/blogs');
                }}
            />
            <button 
                className="btn btn-danger " 
                 onClick={() => {
                props.dispatch(removeBlogFromDatabase(props.blog.id));
                props.history.push('/blogs');
            }}>Sil</button>
        </div>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return {
        blog: state.blogs.find((b) => {
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage);
