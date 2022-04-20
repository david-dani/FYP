import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect (() =>{
    dispatch (listProductDetails(match.params.id))
  }, [dispatch, match])


  return (
    <>
      <Link className ='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :(      
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3><b>{product.name}</b></h3>
              </ListGroup.Item>
              <ListGroup.Item>
               <b> Price: Rs.{product.price}</b>
              </ListGroup.Item>
              <ListGroup.Item align='justify'>
               <b> Description:</b><br />{product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
              </ListGroup.Item>
          </ListGroup>
          
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>Rs.{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item align='center'>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row> )}

    </>
  )
}

export default ProductScreen