import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId} = useParams()
    const [friend, setFriend] = useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setFriend(data))
    },[])
    return (
        <div>
            <h2>this is friend details:{friendId}</h2>
            <h2>Name:{friend.name}</h2>
            <h4>Email:{friend.email}</h4>
            <p>Address:{friend?.address?.city}</p>
        </div>
    );
};

export default FriendDetail;