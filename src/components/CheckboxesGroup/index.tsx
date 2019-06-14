import React, { Component } from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface IProps {

}

interface IState {
  checked: boolean
}

export class CheckboxesGroup extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      checked: false,
    }
  }
  handleChange = (e: any, checked: boolean): void => {
    this.setState({
      checked: checked
    })
  }
  render() {
    return (
      <div>
        <FormControl>
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={this.state.checked} onChange={this.handleChange} />}
              label="Gilad Gray"
              color="secondary"
            />
          </FormGroup>
        </FormControl>
      </div>
    )
  }
}

export default CheckboxesGroup
