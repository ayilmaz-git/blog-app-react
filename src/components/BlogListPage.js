import React from 'react'
import { Link } from 'react-router-dom'

import BlogList from './BlogList'

const BlogListPage = () => {
    return (
        <>
        <div className="container">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item" aria-current="page"><Link to="/blogs" activeClassName="active" >Blogs</Link></li>
        <li className="breadcrumb-item" aria-current="page"><Link to="/create" activeClassName="active">Create</Link></li>
        </ol>
        </nav>
        </div>
      
           <div className="col=12 p-5">
                            <div className="jumbotron ">
                            <h1 className="display-4"> Yazılanlar: </h1>
                            <BlogList />
                            </div>
            </div>
            </>
    )
}

export default BlogListPage
