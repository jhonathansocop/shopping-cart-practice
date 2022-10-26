import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IShoppingCart } from '../ts/interfaces'
import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import { removeShoppingCartItem } from '../redux/shopping-cart-slice'
import DeleteIcon from '@mui/icons-material/Delete'

const ShoppingCart : React.FC = () => {
    const shoppingCart = useSelector((state: any) => state.shoppingCart)
    const dispatch = useDispatch()

    // get data from store
    const shoppingCartItems: Array<IShoppingCart> = shoppingCart.shoppingCartItems
    const total: number = shoppingCart.total

    const deleteProduct = (shoppingCartItem: IShoppingCart) => {
        const message = `Are you sure you want to remove "${shoppingCartItem.name}" product from cart?`
        if (confirm(message)) {
            dispatch(removeShoppingCartItem(shoppingCartItem))
        }
    }

    return (
        <>            
            <Typography variant='h4' component='div'>
                Shopping cart
            </Typography>          

            <TableContainer component={Paper} elevation={5} sx={{ m: 2}}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shoppingCartItems.map((shoppingCartItem: IShoppingCart) => (
                            <TableRow key={shoppingCartItem.id}>
                                <TableCell>{shoppingCartItem.id}</TableCell>
                                <TableCell>{shoppingCartItem.name}</TableCell>
                                <TableCell>{shoppingCartItem.quantity}</TableCell>
                                <TableCell>${shoppingCartItem.price}</TableCell>
                                <TableCell>${shoppingCartItem.quantity * shoppingCartItem.price}</TableCell>
                                <TableCell onClick={() => deleteProduct(shoppingCartItem)}>
                                    <DeleteIcon color="error"/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}></TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>${total}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}

export default ShoppingCart