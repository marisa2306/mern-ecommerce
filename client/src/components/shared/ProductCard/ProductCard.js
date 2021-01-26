import './ProductCard.css'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

const ProductCard = props => {

    const { product } = props

    return (


        < Col sm={6} md={4} lg={3} >
            <Card className=" mt-5">
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                    <Card.Title className="mb-2"> {product.name}</Card.Title>
                    <Card.Text className="mb-2">
                        <p className="">{product.description.substring(0, 100)}...</p>
                        <div class="rating">
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                        </div>
                        <p className="">{product.price} €</p>
                    </Card.Text>

                    <Link to='/product' className="btn btn-block btn-outline-secondary">View More</Link>
                </Card.Body>
            </Card>
        </Col >

    )
}

export default ProductCard
