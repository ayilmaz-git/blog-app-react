import React from 'react'
import BlogList from './BlogList'

const BlogListPage = () => {
    return (
           <div className="col=12 p-5">
                            <div className="jumbotron ">
                            <h1 className="display-4"> Yazılanlar: </h1>
                            <BlogList />
                            </div>
            </div>
    
    )
}

export default BlogListPage
