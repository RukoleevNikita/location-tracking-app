import React from 'react';
import Button from 'react-bootstrap/Button';

export const Btn = ({children, onClick = () => {}, disabled = false}) => {
  return (
    <Button type="button" variant="success" disabled={disabled} onClick={onClick}>{children}</Button> 
  )
}
