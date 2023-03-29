import { Container } from 'components/Container';
import { Button } from 'components/UI/Button';
import styles from './Header.module.scss';
import { ReactComponent as CartIcon } from 'assets/cart.svg';
import { useContext, useEffect, useState } from 'react';
import CartContext from 'store/cartContext';

interface HeaderProps {
  className?: string
  showCartHandler: () => void
}

export const Header = ({ className, showCartHandler }: HeaderProps) => {
  const [isBtnAnim, setIsBtnAnim] = useState(false)
  const cartContext = useContext(CartContext)
  const cartItemsNumber = cartContext.items.reduce((acc, item) => acc + item.amount, 0)

  const buttonClasses = `${styles.headerBtn} ${isBtnAnim ? styles.bump : ''}`

  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setIsBtnAnim(true)
    const timer = setTimeout(() => {
      setIsBtnAnim(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartContext.items])


  return (
    <header className={`${styles.header} + ${className} `}>
      <Container className={styles.headerContainer}>
        <h2>Japan Kitchen 日本食</h2>

        <Button onClick={showCartHandler} className={buttonClasses}>
          <CartIcon />
          <span className={styles.headerCount}>{cartItemsNumber}</span>
        </Button>
      </Container>
    </header>
  )
};
