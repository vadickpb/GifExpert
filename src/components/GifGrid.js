import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data:images, loading} = useFetchGif(category);

    return (

        <>
        
            <h3 className= "animate__animated animate__fadeIn">{ category }</h3>

            <p>{ loading && 'Cargando..' }</p>
            <div className="card-grid">
                
                    
                    {
                        images.map(img => 
                        <GifGridItem key = { img.id} {...img}/>
                        )
                    }

                    
                
            </div>
        </>
    )
}
