import React, { useContext } from 'react';
import { categoryContext } from '../App';

const CategoryDetails = (props) => {
    // const [category, setcategory] = useContext(categoryContext)
    return (
        <div>
            <h3>CategoryDetails Part</h3>
            <p> <strong>Selected Category</strong> {props.category}</p>
        </div>
    );
};

export default CategoryDetails;