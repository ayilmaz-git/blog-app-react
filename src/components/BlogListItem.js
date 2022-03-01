import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id,title }) => {
    return (

            <li className="list-group-item">
              <h4 className='title'> <i className="fa-brands fa-node-js"></i> <Link to= {`/blogs/${id}`}> {title}</Link></h4> - - <i className="fa-solid fa-pen-to-square" style={{color: 'darkred'}}></i> <Link to= {`/edit/${id}`}>Düzenle</Link> {Date}
            </li>
    )
}

export default BlogListItem
