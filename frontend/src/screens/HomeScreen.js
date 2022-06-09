import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
// import Paginate from '../components/Paginate'
import { Pagination } from "@mantine/core";
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'


const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const [activePage, setActivePage] = useState(1);
 

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, activePage))
  }, [dispatch, keyword, activePage])


  return (
    <>
    <Meta />
     {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-dark'>
          Go Back
        </Link>
      )}
        <h1 align='center' className='mt-4' style={{fontSize:'40px',}}><b> Latest Products </b></h1>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :  <Row>
            {products.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>}
        {/* <Paginate class='dark'
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          /> */}
          <Pagination
                page={activePage}
                onChange={setActivePage}
                total={pages}
                color="dark"
              />
    </>

  )
}



export default HomeScreen