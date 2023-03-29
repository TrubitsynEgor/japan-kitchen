import { useContext } from 'react';
import CartContext from 'store/cartContext';
import { IMeals } from 'types';
import { MealItem } from './MealItem';
import styles from './MealList.module.scss';
import meal_01 from './MealsImages/meal_01.jpg'
import meal_02 from './MealsImages/meal_02.jpg'
import meal_03 from './MealsImages/meal_03.jpg'
import meal_04 from './MealsImages/meal_04.jpg'


const JAPAN_MEALS: IMeals[] = [
  { id: 1, name: 'Naomi roll', description: 'Naomi roll its good choice for dinner', price: 11.40, img: meal_01 },
  { id: 2, name: 'Salmon spice', description: 'Rice, salmon, special sauce', price: 14.00, img: meal_02 },
  { id: 3, name: 'Eel sushi', description: 'Smoked eel, sauce spice, sesame', price: 5.40, img: meal_03 },
  { id: 4, name: '"Poce with salmon salad"', description: 'Rice, salmon,cucumber, chuka, nori, nut sauce', price: 16.30, img: meal_04 },
  { id: 5, name: 'Naomi roll', description: 'Naomi roll its good choice for dinner', price: 11.40, img: meal_01 },
  { id: 6, name: 'Salmon spice', description: 'Rice, salmon, special sauce', price: 14.00, img: meal_02 },
  { id: 7, name: 'Eel sushi', description: 'Smoked eel, sauce spice, sesame', price: 5.40, img: meal_03 },
  { id: 8, name: '"Poce with salmon salad"', description: 'Rice, salmon,cucumber, chuka, nori, nut sauce', price: 16.30, img: meal_04 },
  { id: 9, name: 'Salmon spice', description: 'Rice, salmon, special sauce', price: 14.00, img: meal_02 },

]




interface MealListProps {
  className?: string
}



export const MealList = ({ className }: MealListProps) => {



  return (
    <section className={`${styles.mealList} + ${className}`}>
      <ul>
        {JAPAN_MEALS.map(meal =>
          <MealItem key={meal.id} {...meal} />
        )}
      </ul>
    </section>
  )
};
