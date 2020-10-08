import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['goku', 'naruto', 'saint seia'];
    const [categories, setCategories] = useState(['goku']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'HunterX']);
    //     setCategories( cats => [...cats, 'HunderXHunter']);
    // }

    
    return (
        <>
            <h2>Giff Expert App</h2>
            <AddCategory setCategories = { setCategories}/>

            <hr />

            {/* <button onClick = {handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => 
                    <GifGrid 
                        key ={category}
                        category = {category}
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;