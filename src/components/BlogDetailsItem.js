import React from 'react'

const BlogDetailsItem = ({id,title,description}) => {
    return (

           <div className="col=12 mt-3 p-5">
            <code className=''><i class="fa-solid fa-laptop-code"></i> id: {id}</code>
            <h1 className="display-2">{title}</h1>
            <hr></hr>
            <p>{description}</p>
        </div>

    )
}

export default BlogDetailsItem
