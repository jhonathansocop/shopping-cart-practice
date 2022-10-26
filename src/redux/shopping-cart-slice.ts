import { PayloadAction } from "@reduxjs/toolkit"
import { productsList } from "../data/app-data"
import { IProduct, IProductAdded, IShoppingCart } from "../ts/interfaces"

interface ISliceState {
    shoppingCartItems: Array<IShoppingCart>;
    products: Array<IProduct>;
    total: number;
}

const initialState: ISliceState = {
    shoppingCartItems: [],
    products: productsList,
    total: 0
}

const createSlice = require('@reduxjs/toolkit').createSlice

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: initialState,
    reducers: {
        addShoppingCartItem: (state: ISliceState, action: PayloadAction<IProductAdded>) => {
            let newShoppingCartList: Array<IShoppingCart> = []
            let productId = action.payload.product.id
            let productInShoppingCart = state.shoppingCartItems.find((shoppingCartItem: IShoppingCart) => shoppingCartItem.id === productId)

            if (productInShoppingCart) { // Si el producto ya existe en el carrito, agregarlo con el valor 'quantity' actualizado
                const newQuantity = productInShoppingCart.quantity + action.payload.quantity;

                newShoppingCartList = [
                    ...state.shoppingCartItems.filter((cartItem: IShoppingCart) => cartItem.id !== productId),
                    {
                        ...productInShoppingCart,
                        quantity: newQuantity,
                    },
                ]
            } else { // Si el producto no existe en el carrito, agregarlo con el valor 'quantity' seleccionado
                newShoppingCartList = [
                    ...state.shoppingCartItems,
                    {
                        ...action.payload.product,
                        quantity: action.payload.quantity,
                    },
                ]
            }

            state.shoppingCartItems = newShoppingCartList
            state.total = getShoppingCartTotal(state.shoppingCartItems) // actualizar el total

        },
        removeShoppingCartItem: (state: ISliceState, action: PayloadAction<IShoppingCart>) => {
            const newShoppingCartList = [...state.shoppingCartItems.filter((shoppingCartItem: IShoppingCart) => shoppingCartItem.id !== action.payload.id)]
            state.shoppingCartItems = newShoppingCartList
            state.total = getShoppingCartTotal(state.shoppingCartItems) // actualizar el total
        },
    }
})

/**
 * Calcula el total basado en los items que estan en el carrito de compra
 * @param shoppingCart Lista de productos en el carrito actual
 * @returns total actualizado basado en los items del carrito de compra
 */
const getShoppingCartTotal = (shoppingCart: Array<IShoppingCart>) => {
    const total = shoppingCart.reduce((total: number, producto: IShoppingCart) => {
        total += (producto.price * producto.quantity)
        return total
    }, 0)
    return total
}

export const { addShoppingCartItem, removeShoppingCartItem } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer