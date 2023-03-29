import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset'
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const Button = ({ children, className, onClick, type }: ButtonProps) => {

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
};
