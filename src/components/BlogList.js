import React from 'react'
import {connect} from 'react-redux';
import BlogListItem from './BlogListItem';

const BlogList = (props) => {
    return (
        
        <ul className="list-group list-group-flush">
            {props.blogs.map(blog => {
                return <BlogListItem key={blog.id} {...blog} />
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}


// Higher Order Component (HOC)
export default connect(mapStateToProps)(BlogList);