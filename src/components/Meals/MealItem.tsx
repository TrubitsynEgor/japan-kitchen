import { IMeals } from 'types';
import styles from './MealItem.module.scss';
import { formattedPrice } from 'utils/formattedPrice';
import { Input } from 'components/UI/Input';
import { useContext, useState } from 'react';
import CartContext from 'store/cartContext';


interface MealItemProps extends IMeals {
  className?: string

}

export const MealItem = ({ id, className, name, description, img, price }: MealItemProps) => {

  const [value, setValue] = useState(1)
  const [formIsValid, setFormIsValid] = useState(true)

  const cartContext = useContext(CartContext)
  const addToCart = (amount: number) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
      img,
    })
  }

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value)
    console.log(value);

  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value < 1 || value > 10) {
      setFormIsValid(false)
      return
    }
    setFormIsValid(true)
    addToCart(value)

  }





  return (
    <li className={`${styles.mealItem} + ${className}`}>
      <img src={img} alt="Delicious meal" />
      <h4>{name}</h4>
      <p>{description}</p>
      <form className={styles.mealItemWrapper} onSubmit={submitHandler}>
        <Input
          onChange={handleInputValue}
          value={value}
          className={styles.mealItemInput}
          type='number'
        />
        <button>{formattedPrice(price)}</button>
      </form>
      {!formIsValid && <span className={styles.mealItemError}>invalid value </span>}
    </li>
  )
};
