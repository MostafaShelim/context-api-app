import React, { useContext } from 'react';
import { categoryContext } from '../App';

const Shipping = () => {
    const [category, setcategory] = useContext(categoryContext);
    const shippingStyle = {
        border: '1px solid purple',
        margin: '50px',
        padding: '20px'
    }
    return (
        <div style = {shippingStyle}>
            <h3>Shipping Part</h3>
            <p>category: {category}</p>
        </div>
    );
};

export default Shipping;