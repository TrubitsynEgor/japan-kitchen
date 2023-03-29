import { IMeals } from 'types';
import styles from './Cart.module.scss';
import { CartItem } from './CartItem';
import meal_01 from '../Meals/MealsImages/meal_01.jpg'

interface CartProps {
  className?: string
}
export interface ICartItems extends Omit<IMeals, 'description'> {
  amount: number
}

export const Cart = ({ className }: CartProps) => {

  const cartItems: ICartItems[] = [{ id: 1, name: 'Sushi', price: 14.40, img: meal_01, amount: 2 }];

  return (
    <div className={`${styles.cart} + ${className}`}>
      <ul>
        {cartItems.map(item =>
          <CartItem key={item.id} {...item} />)}
      </ul>
    </div>
  )
};
