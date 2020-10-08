import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=ZuLkcsf7uuiYwv2E2QHBmyoSVaEhbAxI';

        const resp = await fetch(url);
        const {data}  = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
                
        })

        console.log(gifs);
    }

    //getGifs();


    return (
        <div>
            <h2>{ counter }</h2>
            <button onClick= {() => setCounter(counter+1)}>+1</button>
            <h3>{ category }</h3>
        </div>
    )
}
