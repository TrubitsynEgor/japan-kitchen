import { formattedPrice } from 'utils/formattedPrice';
import { ICartItems } from './Cart';
import styles from './CartItem.module.scss';

interface CartItemProps extends ICartItems {
  className?: string
  item: ICartItems
  onAdd: (item: ICartItems) => void
  onRemove: (id: number) => void
}

export const CartItem = ({ className, id, name, price, img, amount, onAdd, onRemove, item }: CartItemProps,) => {



  return (
    <li className={`${styles.cartItem} + ${className}`}>
      <h4>{name}</h4>
      <span>{formattedPrice(price)}</span>
      <div className={styles.cartItemAmount}>count: {amount}
        <div className={styles.cartItemBtnGroup}>
          <button onClick={() => onAdd(item)}>+</button>
          <button onClick={() => onRemove(id)}>-</button>
        </div>
      </div>
      <img src={img} alt="Delicious food" />
    </li>
  )
};
