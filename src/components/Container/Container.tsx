import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  className?: string
  children: ReactNode
}

export const Container = ({ children, className }: ContainerProps) => {

  return (
    <div className={`${styles.container} + ${className}`}>
      {children}
    </div>
  )
};
