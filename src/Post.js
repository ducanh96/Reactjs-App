import React, { useEffect, useState } from 'react';
const axios = require('axios');
const Post = ({
    match: {
      params: { id }
    }
  }) => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        body: ''
    });
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
    }, [])
    return (
        <div>
           <p>Id: {post.id}</p>
           <p>Title: {post.title}</p>
           <p>Body: {post.body}</p>
        </div>
    )
}
export default Post