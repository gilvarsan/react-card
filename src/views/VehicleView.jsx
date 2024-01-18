import React from 'react'
import './VehicleView.css'
import { Link } from 'react-router-dom'

function VehicleView({vehicle}) {
  return (
    <div className='VehicleView'>
        <Link to={'/'}> <h1>{vehicle.name}</h1> </Link>
        <h1>{vehicle.description}</h1>
        <img src={vehicle.image} alt={vehicle.name+' image'} />
    </div>
  )
}

export default VehicleView