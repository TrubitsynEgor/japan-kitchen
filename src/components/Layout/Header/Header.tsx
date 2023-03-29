import { Container } from 'components/Container';
import { Button } from 'components/UI/Button';
import styles from './Header.module.scss';
import cartImg from 'assets/cart.svg'
import { ReactComponent as CartIcon } from 'assets/cart.svg';

interface HeaderProps {
  className: string
}

export const Header = ({ className }: HeaderProps) => {

  return (
    <header className={`${styles.header} + ${className}`}>
      <Container className={styles.headerContainer}>
        <h2>Japan Kitchen 日本食</h2>

        <Button className={styles.headerBtn}>
          <CartIcon />
          <span className={styles.headerCount}></span>
        </Button>
      </Container>
    </header>
  )
};
