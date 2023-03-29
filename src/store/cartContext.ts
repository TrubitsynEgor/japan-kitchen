import { ICartItems } from "components/Cart"
import React from "react"




const CartContext = React.createContext({
	items: [
		{
			amount: 0
		}
	],
	totalAmount: 0,
	addItem: (item: ICartItems) => { },
	removeItem: (id: number) => { }
})

export default CartContext