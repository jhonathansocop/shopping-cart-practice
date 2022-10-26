export interface IShoppingCart {
    id: string
    name: string
    quantity: number
    price: number
}

export interface IProduct {
    id: string
    name: string
    image: string
    price: number
}

export interface IProductAdded {
    product: IProduct
    quantity: number
}
