import React, {useState, useEffect} from 'react'
import Rating from '../components/Rating'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'


function ProductScreen({match}) {

     const [product, setProduct] = useState({})

    useEffect(() => {
                    const fetchProduct = async() =>{
                        const  res = await axios.get(`/api/products/${match.params.id}`)
                        
                        setProduct(res.data)
                    }
                    fetchProduct()
    
    
                },[match])
   
        

    return (
        <>
          
            <Link to={'/'}> 
           <Button>Go Back </Button>
           </Link>
           <br/> <br/>
            <Row>
                <Col  md={6}>
                <Image src={product.image} alt = {product.name} fluid/>
                </Col>
                <Col md={3}>
                <ListGroup variant='flush' >
                    <ListGroupItem>
                        <h2>{product.name}</h2>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating rate={product.rating}  reviews={product.numReviews} />
                    </ListGroupItem>
                    <ListGroupItem>
                        Prix: ${product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                    Description: <br/> {product.description}
                    </ListGroupItem>
                </ListGroup>
                </Col>
                <Col md={3}>
                <Card>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                    <Col>
                                    Prix:
                                    </Col>

                                    <Col>
                                    <strong>{product.price}</strong>
                                    </Col>
                            </Row>
                        </ListGroupItem>                        
                        <ListGroupItem>
                            <Row>
                                    <Col>
                                     Statut:
                                    </Col>
                                    <Col>
                                    {product.countInStock > 0 ? 'Disponible':'Non disponible' }
                                    </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                            Ajouter aux favoris
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
