import React, { useContext } from 'react';
import { categoryContext } from '../App';

const Header = () => {
    const [category, setcategory] = useContext(categoryContext);
    const headerStyle = {
        border: '1px solid purple',
        margin: '50px',
        padding: '5px'
    }
    return (
        <div style = {headerStyle}>
            <h3>Header Part</h3>
            <p>category: {category}</p>
        </div>
    );
};

export default Header;