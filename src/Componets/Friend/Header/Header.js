import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>This is a my fancy routering</h2>
            <div style={{display:'flex', justifyContent: 'center' }}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to='/friends'>Friend</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;