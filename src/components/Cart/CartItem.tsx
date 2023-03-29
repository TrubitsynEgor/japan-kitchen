import { Button } from 'components/UI/Button';
import { formattedPrice } from 'utils/formattedPrice';
import { ICartItems } from './Cart';
import styles from './CartItem.module.scss';

interface CartItemProps extends ICartItems {
  className?: string
}

export const CartItem = ({ className, id, name, price, img, amount }: CartItemProps) => {


  return (
    <li className={`${styles.cartItem} + ${className}`}>
      <h4>{name}</h4>
      <span>{formattedPrice(price)}</span>
      <div className={styles.cartItemAmount}>count: {amount}
        <div className={styles.cartItemBtnGroup}>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <img src={img} alt="Delicious food" />
    </li>
  )
};
