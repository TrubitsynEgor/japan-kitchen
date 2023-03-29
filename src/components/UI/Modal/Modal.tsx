import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string
  children: ReactNode
  closeCartHandler?: () => void

}


export const Modal = ({ className, children, closeCartHandler }: ModalProps) => {

  return (
    <div className={`${styles.modal} + ${className}`} onClick={closeCartHandler}>
      {children}
    </div>
  )
};
