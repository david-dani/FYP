import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


const Product = ({product, recommendedProduct}) => {
  return (
  <Card className='my-3 p-3 rounded'>
    <Link to={`/product/${product._id}`}>
      <Card.Img src={product.image} variant='top' />
    </Link>
     
<Card.Body>
    {recommendedProduct ? (
       <a href={`/product/${product._id}`}>
           <Card.Title as='div'>
        <strong>{product.name}</strong>
      </Card.Title>
       </a>
    ):(
      <Link to={`/product/${product._id}`}>
      <Card.Title as='div'>
        <strong>{product.name}</strong>
      </Card.Title>
    </Link>
    )}
   
<Card.Text as='div'>
    <Rating value={product.rating} text={` ${product.numReviews} Reviews`}>
    </Rating>
</Card.Text>
<Card.Text as='h3'><b>Rs.{product.price}</b></Card.Text>

</Card.Body>

  </Card>
  )
}

export default Product