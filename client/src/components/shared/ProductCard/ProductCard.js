import './Card.css'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

const ProductCard = ({ productId, name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) => {

    return (


        < Col sm={6} md={4} lg={3} >
            <Card className=" mt-5">
                <Card.Img variant="top" src={imageFileName} alt={name} />
                <Card.Body>
                    <Card.Title className="mb-2"> {name}</Card.Title>
                    <Card.Text className="mb-2">
                        <p className="">{description.substring(0, 100)}...</p>
                        <div class="rating">
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                            <span> <i class="fa fa-star"></i> </span>
                        </div>
                        <p className="">{price} €</p>
                    </Card.Text>

                    <Link to='/product' className="btn btn-block btn-outline-secondary">View More</Link>
                </Card.Body>
            </Card>
        </Col >

    )
}

export default ProductCard
