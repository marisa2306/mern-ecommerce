import data from './../../../data'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Rating from './../../shared/ProductCard/Rating'


const ProductDetails = props => {

    const product = data.products.find(elm => elm_id === props.match.params.id)

    return (

        !product ? <h2>Product not found</h2>
            :
            <Container>
                <Row>
                    <Col>
                        <Image src={product.name} alt={product.name} />
                    </Col>
                    <Col>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <Rating product={product.rating} numReviews={product.numReviews}></Rating>
                        <p><strong>Price:</strong> $ {product.price}</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
    )
}

export default ProductDetails

