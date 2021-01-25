import './ProductList.css'
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'
import ProductCard from './../../shared/ProductCard/ProductCard'

const ProductList = () => {

    return (
        <>
            <h1>Our Product</h1>
            <ProductCard />
        </>
    )

}

export default ProductList