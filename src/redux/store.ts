import { configureStore } from "@reduxjs/toolkit"
import shoppingCartSlice from "./shopping-cart-slice"

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartSlice
    }
})

export default store