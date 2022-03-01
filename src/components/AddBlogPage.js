import React from 'react'
import BlogForm from './BlogForm';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import {addBlogToDatabase} from '../actions/blogs';
 
const AddBlogPage = (props) => {
    return (
        <>
        <div className="container">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item" aria-current="page"><Link to="/blogs" activeClassName="active">Blogs</Link></li>
        <li className="breadcrumb-item" aria-current="page"><Link to="/create" activeClassName="active">Create</Link></li>
        </ol>
        </nav>
        </div>
       
        <div className="col=12 p-5">
        <div className="jumbotron">
            <BlogForm onSubmit={(blog) => {
                props.dispatch(addBlogToDatabase(blog));
                props.history.push('/blogs');
            }}/>
        </div>
        </div>
        </>
    )
}

export default connect()(AddBlogPage);
