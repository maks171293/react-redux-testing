import React, { Component } from 'react';
import {connect} from 'react-redux';
import { IAppState } from '../../store/Store';
import { getRestaurants } from '../../services/selectors';
import { getAllRestaurants as getAllRestaurantsAction } from '../../actions/RestaurantActions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import SelectSimple from '../SelectSimple';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  select: {
    color: '#fff'
  },
})

interface IProps {
  classes: {
    root: string,
    title: string,
    select: string
  };
  getAllRestaurants: (value: string) => void;
}

const cities = [
  {
    value: 'kiev', label: 'Kiev',
  },
  {
    value: 'berlin', label: 'Berlin',
  },
  {
    value: 'london', label: 'London',
  }
]

export class Header extends Component<IProps> {
  onSelectChange = (value: string) => {
    const { getAllRestaurants } = this.props;
    getAllRestaurants(value)
  }
  render() {
    const {classes} = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            Restaurants Reservation
          </Typography>
          <SelectSimple className={classes.select} labels={cities} onSelectChange={this.onSelectChange} />
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
  restaurants: getRestaurants(state),
})

const mapDispatchToProps = {
  getAllRestaurants: getAllRestaurantsAction,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Header))
