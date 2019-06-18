import * as React from 'react'
import { connect } from 'react-redux'
import { debounce } from "throttle-debounce";
import { IAppState } from '../../store/Store';
import { IRestaurant } from '../../reducers/restaurantReducer';
import { getRestaurants } from '../../services/selectors';
import { changeSearchString, changeFilterTypes, toggleShowOpened, toggleShowAll } from '../../actions/RestaurantActions';
import ExpanPanel from '../../components/ExpanPanel';
import TextInput from '../../components/TextInput';
import FormGroup from '@material-ui/core/FormGroup';
import CheckboxesGroup from '../../components/CheckboxesGroup';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styles from './SideBar.module.scss';

interface IProps {
  restaurants: IRestaurant[];
  changeSearchString: (value: string) => void;
  changeFilterTypes: (value: string) => void;
  toggleShowAll: (value: boolean) => void;
  toggleShowOpened: (value: boolean) => void;
}

interface IState {
  isOpened: boolean;
  showAll: boolean;
  searchString: string;
}

export class SideBar extends React.Component<IProps, IState> {
  searchStrignDebounce(value: string) {
    throw new Error("Method not implemented.");
  }
  constructor(props: IProps){
    super(props);
    this.state = {
      searchString: '',
      isOpened: true,
      showAll: true,
    }
    this.searchStrignDebounce = debounce(600, this.props.changeSearchString);
  }

  onChangeCheckbox = (label: string, value: boolean) => {
    this.props.changeFilterTypes(label);
  }

  onChangeSwitch = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const {checked} = event.target;
    const { toggleShowAll,toggleShowOpened } = this.props;
    this.setState({
      ...this.state,
      [name]: checked,
    })
    if(name === 'isOpened'){
      toggleShowOpened(checked);
    }else{
      toggleShowAll(checked);
    }
  }

  onChangeSearchString = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({
      searchString: value,
    });
    this.searchStrignDebounce(value);
  }
  
  public render() {
    const { isOpened, showAll, searchString } = this.state;
    return (
      <div className={styles.SideBar}>
        <ExpanPanel title="Search By Name">
          <TextInput text={searchString} onChange={this.onChangeSearchString}/>
        </ExpanPanel>
        <ExpanPanel title="Filter By Type">
          <CheckboxesGroup onCheckboxChange={this.onChangeCheckbox} />
        </ExpanPanel>
        <ExpanPanel title="General">
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={isOpened}
                onChange={this.onChangeSwitch('isOpened')}
                value="isOpened"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />}
            label="Is Opened Now"
          />
          <FormControlLabel
            control={
              <Switch
                checked={showAll}
                onChange={this.onChangeSwitch('showAll')}
                value="showAll"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />}
            label="Show all"
          />
        </FormGroup>
        </ExpanPanel>
      </div>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
    restaurants: getRestaurants(state),
})

const mapDispatchToProps = {
  changeSearchString,
  changeFilterTypes,
  toggleShowAll,
  toggleShowOpened,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
// export default SideBar;
