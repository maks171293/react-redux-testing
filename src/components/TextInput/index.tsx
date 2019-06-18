import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import styles from './TextInput.module.scss';

interface IProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	text: string;
}
export class TextInput extends Component<IProps> {
	render() {
		const { text, onChange } = this.props;
		return (
			<TextField
				label="Search"
				className={styles.TextInput}
				value={text}
				onChange={onChange}
				margin="normal"
			/>
		)
	}
}

export default TextInput
