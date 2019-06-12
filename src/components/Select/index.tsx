import React, { Component } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface MyProps { };
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
    return (
      <form autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={value}
            onChange={this.handleChange}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
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

export default SelectSimple
