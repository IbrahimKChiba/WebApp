import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product(props) {
    return (
        <Card className='my-3 py-3 rounded' style={{ height: '30rem' }} >
           
         
           <Link to={`/product/${props.product._id}`}>

            <CardImg className='py-3' src={props.product.image} variant='top' style={{ height: '15rem' }} />
            </Link>      

             <Card.Body style={{ width: '15rem'}} >
             <Link to={`/product/${props.product._id}`}> 
             <Card.Title as ='div'><strong>{props.product.name}</strong></Card.Title>
             </Link>
           
           <Card.Text as='div'>

               <Rating rate={props.product.rating} reviews={props.product.numReviews}/>
              
           </Card.Text>

           <Card.Text as='h3'>
              ${props.product.price}

           </Card.Text>

            </Card.Body>
             
        </Card>
        
           
    )
}

export default Product
