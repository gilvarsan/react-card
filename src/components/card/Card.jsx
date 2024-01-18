import './Card.css'
import { Link } from 'react-router-dom'

function Card({title='T', description='D'}) {
  return (
    <div className='Card'>
        <Link to={title}> <h2>{title}</h2> </Link>
        <p>{description}</p>
    </div>    
  )
}

export default Card