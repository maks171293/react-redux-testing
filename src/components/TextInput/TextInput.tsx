import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import styles from './TextInput.module.scss';

export interface ITextInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}
const TextInput: React.FC<ITextInputProps> = ({ text, onChange }) => {
  return (
    <TextField
      label="Search"
      name="search"
      className={styles.TextInput}
      value={text}
      onChange={onChange}
      margin="normal"
    />
  )
}

export default TextInput
