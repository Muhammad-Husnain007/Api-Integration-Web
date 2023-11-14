import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MediaCard() {
  const [data, setData] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    // Data loading, you can display a loading indicator here.
    return <p>Loading...</p>;
  }

  return (
    <div className='div'>
      <p>{`Id : ${data.id}`}</p>
      <p>{'Title : ' + data.title}</p>
      <p>{'Category : ' + data.category}</p>
      <p>{'Description : ' + data.description}</p>
      <img id='images' src={data.image} alt="" />
      <p>{'Price : ' + data.price}</p>
      <p>{'Rate : ' + data.rating.rate}</p>
      <p>{'Count : ' + data.rating.count}</p>
    </div>
  );
}
