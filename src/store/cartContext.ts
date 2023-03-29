import { ICartItems } from "components/Cart"
import React from "react"




const CartContext = React.createContext({
	items: [
		{
			id: 0,
			name: '',
			price: 0,
			img: '',
			amount: 0
		}
	],
	totalAmount: 0,
	addItem: (item: ICartItems) => { },
	removeItem: (id: number) => { }
})

export default CartContext