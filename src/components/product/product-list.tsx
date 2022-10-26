import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { IProduct } from '../../ts/interfaces'
import ProductItem from './product-item'

const ProductList: React.FC = () => {
    const products = useSelector((state: any) => state.shoppingCart.products)
    return (
        <>
            <Typography variant='h4' component='div'>
                Products
            </Typography>
            <Grid container sx={{ m: 2}}>
                {products.map((product: IProduct) => (
                    <ProductItem key={product.id} product={product}></ProductItem>
                ))}
            </Grid>
        </>
    )
}

export default ProductList