import { Container } from 'components/Container';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string
}

export const Hero = ({ className }: HeroProps) => {

  return (
    <section className={`${styles.hero} + ${className}`}>
      <Container className={styles.heroContainer}>
        <h1>Delicious Japanese food at our restaurant</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, reiciendis, qui eos minima est tempora debitis blanditiis repellat numquam necessitatibus accusamus omnis. Inventore reiciendis expedita ipsam, dicta delectus mollitia rem?</p>
      </Container>
    </section>
  )
};
