import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  className?: string
  children?: ReactNode
  placeholder?: string
  name?: string
  type?: HTMLInputTypeAttribute
  value?: string | number
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

}

export const Input = (
  ({ className, children, placeholder, name, type, value, onChange, defaultValue }: InputProps) => {

    return (
      <div className={`${styles.input} ${className}`}>
        <label htmlFor={name}>{children}</label>
        <input id={name} onChange={onChange} type={type} placeholder={placeholder} name={name} value={value} defaultValue={defaultValue} />
      </div>
    )
  });
