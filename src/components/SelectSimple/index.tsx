import React, { Component } from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
  } 
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
    this.setState({
      value
    })
  }

  render() {
    let { value } = this.state;
    const {className, classes} = this.props;
    return (
      <form autoComplete="off" className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="city-simple">City</InputLabel>
          <Select
            value={value}
            onChange={this.handleChange}
            className={className}
            input={<OutlinedInput labelWidth={20} name="city" id="outlined-age-simple" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'kiev'}>Kiev</MenuItem>
            <MenuItem value={'london'}>London</MenuItem>
            <MenuItem value={'berlin'}>Berlin</MenuItem>
        </Select>
        </FormControl>
      </form>
    )
  }
}

export default withStyles(styles)(SelectSimple)
