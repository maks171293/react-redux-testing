import React, { Component } from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface IProps {
  onCheckboxChange: (label: string, value: boolean) => void
}

interface IState {
  restaurant: boolean;
  bar: boolean;
  cafe: boolean;
  vegetarian: boolean;
}

export class CheckboxesGroup extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      restaurant: true,
      bar: true,
      cafe: true,
      vegetarian: true,
    }
  }
  handleChange = (e: any, checked: boolean): void => {
    const { name } = e.target;
    const {onCheckboxChange} = this.props;
    this.setState({ [name]: checked } as any, () => {
      onCheckboxChange(name, checked);
    })
  }
  render() {
    const { restaurant, bar, cafe, vegetarian } = this.state;
    return (
      <div>
        <FormControl>
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={restaurant} name="restaurant" onChange={this.handleChange} />}
              label="Restaurant"
              color="secondary"
            />
            <FormControlLabel
              control={<Checkbox checked={bar} name="bar" onChange={this.handleChange} />}
              label="Bar"
              color="secondary"
            />
            <FormControlLabel
              control={<Checkbox checked={cafe} name="cafe" onChange={this.handleChange} />}
              label="Cafe"
              color="secondary"
            />
            <FormControlLabel
              control={<Checkbox checked={vegetarian} name="vegetarian" onChange={this.handleChange} />}
              label="Vegetarian"
              color="secondary"
            />
          </FormGroup>
        </FormControl>
      </div>
    )
  }
}

export default CheckboxesGroup
