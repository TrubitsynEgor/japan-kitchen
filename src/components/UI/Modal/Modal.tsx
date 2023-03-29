import { ReactNode } from 'react';
import { Button } from '../Button';
import styles from './Modal.module.scss';

interface ModalProps {
  className: string
  children: ReactNode
  onHandleModalVisible: () => void

}


export const Modal = ({ className, children, onHandleModalVisible }: ModalProps) => {

  return (
    <div className={`${styles.modal} + ${className}`} onClick={onHandleModalVisible}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <h1>{children}</h1>
        <Button className={styles.modalBtn} onClick={onHandleModalVisible} type='button'>Close</Button>
      </div>
    </div>
  )
};
