import { IMeals } from 'types';
import styles from './MealItem.module.scss';
import { formattedPrice } from 'utils/formattedPrice';
interface MealItemProps extends IMeals {
  className?: string

}

export const MealItem = ({ className, name, description, img, price }: MealItemProps) => {



  return (
    <li className={`${styles.mealItem} + ${className}`}>
      <img src={img} alt="Delicious meal" />
      <h4>{name}</h4>
      <p>{description}</p>
      <button>{formattedPrice(price)}</button>
    </li>
  )
};
