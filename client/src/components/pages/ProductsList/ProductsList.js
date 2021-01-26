import './ProductList.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ProductCard from './../../shared/ProductCard/ProductCard'
import data from './../../../data'


const ProductList = () => {

    return (
        <>
            <h1>Our Product</h1>
            {data.products.map(product =>
                <ProductCard key={product._id} product={product} />

            )}

        </>
    )

}

export default ProductList