import { Container } from 'components/Container';
import { MealList } from './MealList';
import styles from './Meals.module.scss';

interface MealsProps {
  className: string
}

export const Meals = ({ className }: MealsProps) => {

  return (
    <section className={`${styles.meals} + ${className}`}>
      <Container>
        <h2>Our menu:</h2>
        <MealList />
      </Container>
    </section>
  )
};
