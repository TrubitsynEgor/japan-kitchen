import { IMeals } from 'types';
import styles from './MealItem.module.scss';

interface MealItemProps extends IMeals {
  className?: string

}

export const MealItem = ({ className, name, description, img, price }: MealItemProps) => {

  const formattedPrice = `$ ${price.toFixed(2)}`

  return (
    <li className={`${styles.mealItem} + ${className}`}>
      <img src={img} alt="Delicious meal" />
      <h4>{name}</h4>
      <p>{description}</p>
      <button>{formattedPrice}</button>
    </li>
  )
};
