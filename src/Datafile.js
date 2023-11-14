import React,{useState, useEffect} from 'react'
import './App.css';

function Datafile() {
 const [data,setData] = useState([])
 useEffect(()=> {
  fetch("https://fakestoreapi.com/products").then((result) => {
    result.json().then((response) => {
    console.log(result)
    setData(response)
    })
      }, [])
 })
  return (
    <div>
      {data.map((x,i) => {
        return (
          <>
            <div className='div' key={i}>
            
            <p>{x.id}</p>
            <p>{x.title}</p>
            <p>{x.category}</p>
            <p>{x.description}</p>
           <img  key={i} src={x.image} alt="" /> 
          
            <p>{x.price}</p>
            <p key={i}>{x.rating.rate}</p>
           <p key={i}>{x.rating.count}</p>
      
            </div>
          </>
        )
      })

      }
         
    </div>
  );
}

export default Datafile;
