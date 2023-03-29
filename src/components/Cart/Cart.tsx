import { IMeals } from 'types';
import styles from './Cart.module.scss';
import { CartItem } from './CartItem';
import { formattedPrice } from 'utils/formattedPrice';
import { Button } from 'components/UI/Button';
import { useContext } from 'react';
import CartContext from 'store/cartContext';

interface CartProps {
  className?: string
  closeCartHandler: () => void

}
export interface ICartItems extends Omit<IMeals, 'description'> {
  amount: number
}


export const Cart = ({ className, closeCartHandler }: CartProps) => {


  const cartContext = useContext(CartContext)

  const hasItems = cartContext.items.length > 0;
  const cartItems: ICartItems[] = cartContext.items;
  const totalAmount = cartContext.totalAmount;

  const removeCartItem = (id: number) => {
    cartContext.removeItem(id)
  }
  const addCartItem = (item: ICartItems) => {
    cartContext.addItem({ ...item, amount: 1 })
  }


  return (
    <div className={`${styles.cart} + ${className}`} onClick={(e) => e.stopPropagation()}>
      <Button onClick={closeCartHandler} className={`${styles.cartClose} + ${styles.cartBtn}`}>X</Button>
      <ul>
        {cartItems.map(item =>
          <CartItem key={item.id} item={item} {...item} onAdd={addCartItem} onRemove={removeCartItem} />)}
      </ul>
      <div className={styles.cartBot}>
        <h3>Total:<span>{formattedPrice(totalAmount)}</span></h3>
        {hasItems && <Button className={styles.cartBtn}>Сheckout</Button>}
      </div>
    </div>
  )
};
