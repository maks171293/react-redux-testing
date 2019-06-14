import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import styles from './TextInput.module.scss';

interface IProps {

}

interface IState {
	string: string;
}

export class TextInput extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			string: ''
		}
	}
	handleChange = (e: any): void => {
		const {value} = e.target;
		this.setState({
			string: value,
		})
	}
	render() {
		const { string } = this.state
		return (
			<TextField
				label="Search"
				className={styles.TextInput}
				value={string}
				onChange={this.handleChange}
				margin="normal"
			/>
		)
	}
}

export default TextInput
