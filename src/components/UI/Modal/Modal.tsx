import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string
  children: ReactNode
  onHandleModalVisible?: () => void

}


export const Modal = ({ className, children, onHandleModalVisible }: ModalProps) => {

  return (
    <div className={`${styles.modal} + ${className}`} onClick={onHandleModalVisible}>
      {children}
    </div>
  )
};
