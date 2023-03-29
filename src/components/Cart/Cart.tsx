import { IMeals } from 'types';
import styles from './Cart.module.scss';
import { CartItem } from './CartItem';
import meal_01 from '../Meals/MealsImages/meal_01.jpg'
import { formattedPrice } from 'utils/formattedPrice';
import { Button } from 'components/UI/Button';

interface CartProps {
  className?: string
  closeCartHandler: () => void

}
export interface ICartItems extends Omit<IMeals, 'description'> {
  amount: number
}

export const Cart = ({ className, closeCartHandler }: CartProps) => {

  const cartItems: ICartItems[] = [{ id: 1, name: 'Sushi', price: 14.40, img: meal_01, amount: 2 }];
  const totalPrice = (cartItems: ICartItems[]) => {
    return cartItems.map(item => item.price).reduce((acc, price) => acc + price);
  }

  return (
    <div className={`${styles.cart} + ${className}`} onClick={(e) => e.stopPropagation()}>
      <Button onClick={closeCartHandler} className={`${styles.cartClose} + ${styles.cartBtn}`}>X</Button>
      <ul>
        {cartItems.map(item =>
          <CartItem key={item.id} {...item} />)}
      </ul>
      <div className={styles.cartBot}>
        <h3>Total:<span>{formattedPrice(totalPrice(cartItems))}</span></h3>
        <Button className={styles.cartBtn}>Сheckout </Button>
      </div>
    </div>
  )
};
