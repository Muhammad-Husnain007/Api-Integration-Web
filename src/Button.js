import React, { useNavigate } from 'react-router-dom';


const Button = () => {
    const navigate = useNavigate()
    const showdata = () => {
       navigate('/Datafile') 
    }
  return (
    <div>
      <button onClick={showdata}>onclick</button>
    </div>
  )
}

export default Button
