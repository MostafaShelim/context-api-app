import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../App';
import CategoryDetails from './CategoryDetails';

const allProducts = [
    {name: 'Samsung', category: 'mobile'}, {name: 'Oppo', category: 'mobile'}, {name: 'Xiomi', category: 'mobile'},
    {name: 'Asus', category: 'laptop'}, {name: 'Dell', category: 'laptop'}, {name: 'Hp', category: 'laptop'},
    {name: 'Sony', category: 'camera'}, {name: 'Nikkon', category: 'camera'}, {name: 'Canon', category: 'camera'}
]
const Category = () => {
    const [category, setcategory] = useContext(categoryContext)
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        console.log({category});
        const neededProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(neededProducts);
    }, [category])
    const categoryStyle = {
        border: '1px solid purple',
        margin:'50px', 
        padding: '20px'
    }
    console.log(products);
    return (
        <div style={categoryStyle}>
            <h3>Category Part</h3>
            <p>category: {category}</p>
            <button onClick={() => setcategory('laptop')}>laptop</button>
            <button onClick={() => setcategory('mobile')}>mobile</button>
            <button onClick={() => setcategory('camera')}>camera</button>
            <h5>Amr bitore tumi</h5>
            {
                products.map(pd => <CategoryDetails category = {pd.category}></CategoryDetails>)
            }
        </div>
    );
}
export default Category;