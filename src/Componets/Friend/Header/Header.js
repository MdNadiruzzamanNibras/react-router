import React from 'react';
import { Link } from 'react-router-dom';
 

const Header = () => {
    return (
        <div>
            <h2>This is a my fancy routering</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/friends">Friend</Link>
                <Link to="/post">Post</Link>
                <Link to="/about">About</Link>
            </nav>
            {/* <div style={{display:'flex', justifyContent: 'center' }}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to='/friends'>Friend</CustomLink>
            <CustomLink to='/friend/:friendId'></CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/post'></CustomLink>
            </div> */}
        </div>
    );
};

export default Header;