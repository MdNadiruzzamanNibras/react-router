import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h2>This a Facebook post:{posts.length}</h2>
            {
                posts.map(post=> <Link key={post.id} to={`/post/${post.id}`}>{post.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;