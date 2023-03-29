import { ICartItems } from "components/Cart"
import { ReactNode } from "react"
import CartContext from "./cartContext"
import { useReducer } from "react"



const initCartState = {
	items: [],
	totalAmount: 0
}
const cartReducer = (state: typeof initCartState, action: any) => {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount = state.totalAmount + (action.item.price) * action.item.amount
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		}
	}
	return initCartState;
}

interface CartContextProviderProps {
	children: ReactNode
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, initCartState)

	const addItemHandler = (item: ICartItems) => {
		dispatchCartAction({
			type: 'ADD_ITEM', item
		})
	}

	const removeItemHandler = (id: number) => {
		dispatchCartAction({
			type: 'REMOVE_ITEM', id
		})
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler
	}

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContextProvider