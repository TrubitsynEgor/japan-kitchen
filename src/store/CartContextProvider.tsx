import { ICartItems } from "components/Cart"
import { ReactNode } from "react"
import CartContext from "./cartContext"
import { useReducer } from "react"



const initCartState = {
	items: [],
	totalAmount: 0,
}
const cartReducer = (state: any, action: any) => {
	if (action.type === 'ADD_ITEM') {
		const updatedTotalAmount = state.totalAmount + (action.item.price) * action.item.amount
		const existingCartItemIdx = state.items.findIndex((item: any) => item.id === action.item.id);
		const existingCartItem = state.items[existingCartItemIdx]
		let updatedItem;
		let updatedItems;
		if (existingCartItem) {
			updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount }
			updatedItems = [...state.items]
			updatedItems[existingCartItemIdx] = updatedItem

		} else {
			updatedItem = {
				...action.item
			}
			updatedItems = state.items.concat(updatedItem)
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		}
	}
	//========================================//
	if (action.type === 'REMOVE_ITEM') {
		const existingCartItemIdx = state.items.findIndex((item: ICartItems) => item.id === action.id);
		const existingCartItem = state.items[existingCartItemIdx]
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;

		let updatedItems;
		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter((item: ICartItems) => item.id !== action.id)
		} else {
			const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
			updatedItems = [...state.items]
			updatedItems[existingCartItemIdx] = updatedItem
		}
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