import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId}=useParams()
    const[post, setPost]= useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>setPost(data))
    },[postId])

    return (
        <div>
            <h3>this post:{postId}</h3>
            <h4>{post.title}</h4>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetails;