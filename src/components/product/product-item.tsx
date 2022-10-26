import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addShoppingCartItem } from '../../redux/shopping-cart-slice'
import { IProduct, IProductAdded } from '../../ts/interfaces'

interface Props {
    product: IProduct
}

const ProductItem: React.FC<Props> = ({ product }) => {
    const [quantity, setQuantity] = useState<number>(1)
    const dispatch = useDispatch()

    const addProduct = (product: IProduct) => {
        let newProductSelected: IProductAdded = {
            product,
            quantity
        }
        dispatch(addShoppingCartItem(newProductSelected))
    }

    return (
        <Grid item xs={6} sm={4} md={3} >
            <Card sx={{ maxWidth: 345, m: 1, p: 2 }} variant="outlined" >
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Grid container>
                        <Grid item md={10}>
                            <Typography gutterBottom variant="body1" component="div">
                                {product.name}
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography gutterBottom variant="body1" component="div">
                                ${product.price}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Grid item md={8} sx={{ p: 1 }}>
                            <TextField
                                id="outlined-basic"
                                label="Quantity"
                                variant="outlined"
                                type="number"
                                size="small"                                
                                value={quantity}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))}
                            />
                        </Grid>
                        <Grid item md={4} sx={{ p: 1 }}>
                            <Button variant="contained" color='primary' onClick={() => addProduct(product)}>Buy</Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductItem