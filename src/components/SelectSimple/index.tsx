import React, { Component } from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import Input from '@material-ui/core/Input';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'flex-end',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
})

interface MyProps { 
  className: string, 
  classes: {
    formControl: string, 
    root: string
  },
  labels: { value: string, label: string }[],
  onSelectChange: (value: string) => void,
};
interface MyState { value: string };

export class SelectSimple extends React.Component<MyProps, MyState> {
  constructor(props: MyProps){
    super(props);
    this.state = {
      value: 'kiev'
    }
  }

  handleChange = (e: React.ChangeEvent<{ value: any }>) => {
    const { value } = e.target;
    const { onSelectChange } = this.props;
    this.setState({
      value
    }, () => {
      onSelectChange(value);
    })
  }

  render() {
    let { value } = this.state;
    const {className, classes, labels} = this.props;
    return (
      <form autoComplete="off" className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="city-simple">City</InputLabel>
          <Select
            value={value}
            onChange={this.handleChange}
            className={className}
            input={<Input name="city" id="outlined-age-simple" />}
          >
            {
              labels.map(item=> <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)
            }
        </Select>
        </FormControl>
      </form>
    )
  }
}

export default withStyles(styles)(SelectSimple)
