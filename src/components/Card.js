import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Profile from './Assests/profile.jpg'
import { useParams } from 'react-router-dom';

export default function MediaCard() {
  const { id } = useParams()
  const [img, setImg] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`).then((result) => {
      result.json().then((response) => {
        console.log(response)
        setImg(response)
      })
    }, [id])
  })

  const showdata = (id) => {
    navigate(`/Fetch/${id}`)
  }

  return (
    <div className='card-main'>
      {img.map((x, i) => {
        return (
          <div className='div-images' key={i}>
            <a href="" onClick={() => showdata(x.id)}>
              <img id='images' key={i} src={x.image} alt="" />
            </a>
          </div>
        )
      })}
    </div>
  );
}

