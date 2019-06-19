import * as React from 'react'
import { debounce } from "throttle-debounce";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { IRestaurant } from '../../reducers/restaurantReducer';
import ExpanPanel from '../ExpanPanel';
import TextInput from '../TextInput/TextInput';
import CheckboxesGroup from '../CheckboxesGroup';
import styles from './SideBar.module.scss';

export interface ISideBarProps {
  restaurants: IRestaurant[];
  changeSearchString: (value: string) => void;
  changeFilterTypes: (value: string) => void;
  changeTimeFilter: (value: string) => void;
}

export interface ISideBarState {
  searchString: string;
  timeFilter: any;
}

export class SideBar extends React.Component<ISideBarProps, ISideBarState> {
  searchStrignDebounce(value: string) {
    throw new Error("Method not implemented.");
  }
  constructor(props: ISideBarProps){
    super(props);
    this.state = {
      searchString: '',
      timeFilter: 'isClosed',
    }
    // wtf
    this.searchStrignDebounce = debounce(600, this.props.changeSearchString);
  }

  onChangeCheckbox = (label: string) => {
    this.props.changeFilterTypes(label);
  }

  onChangeRadio = (event: React.ChangeEvent<any>) => {
    const {value} = event.target; 
    this.setState({
      timeFilter: event.target.value
    })
    this.props.changeTimeFilter(value)
  }

  onChangeSearchString = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({
      searchString: value,
    });
    this.searchStrignDebounce(value);
  }
  
  public render() {
    const { searchString } = this.state;
    return (
      <div className={styles.SideBar}>
        <ExpanPanel title="Search By Name">
          <TextInput text={searchString} onChange={this.onChangeSearchString}/>
        </ExpanPanel>
        <ExpanPanel title="Filter By Type">
          <CheckboxesGroup onCheckboxChange={this.onChangeCheckbox} />
        </ExpanPanel>
        <ExpanPanel title="Time Filters">
        <RadioGroup
          aria-label="Time Filter"
          name="time"
          value={this.state.timeFilter}
          onChange={this.onChangeRadio}
        >
          <FormControlLabel value="isOpened" control={<Radio />} label="Opened" />
          <FormControlLabel value="isClosed" control={<Radio />} label="Closed" />
          <FormControlLabel value="showAll" control={<Radio />} label="Show all" />
        </RadioGroup>
        </ExpanPanel>
      </div>
    )
  }
}

export default SideBar;
