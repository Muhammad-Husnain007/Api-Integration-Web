import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewFile = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
            .then((result) => {
                result.json().then((response) => {
                    setData(response)
                })
            })
    }, [id])
  
    return (
        <div>
           
            {data.map((item) => (
                <div className='div' key={item.id}>
                     {/* <p>ID: {item.id}</p>
                    <p>Title: {item.title}</p>
                    <p>Category: {item.category}</p>
                    <p>Description: {item.description}</p> */}
                    <img id='images' src={item.image} alt="" />
                    {/* <p>Price: {item.price}</p>
                    <p>Rating: {item.rating.rate}</p>
                    <p>Rating Count: {item.rating.count}</p> */}
                </div>
            ))}
        </div>
    )
}

export default NewFile
