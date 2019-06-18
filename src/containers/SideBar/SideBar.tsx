import * as React from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../../store/Store';
import { IRestaurant } from '../../reducers/restaurantReducer';
import { getRestaurants } from '../../services/selectors';
import ExpanPanel from '../../components/ExpanPanel';
import TextInput from '../../components/TextInput';
import CheckboxesGroup from '../../components/CheckboxesGroup';
import styles from './SideBar.module.scss';

interface IProps {
  restaurants: IRestaurant[];
}

export class SideBar extends React.Component<IProps> {
  onChangeCheckbox = (label: string, value: boolean) => {
    console.log('sidebar changed checkbox', label, value);
  }
  public render() {
    return (
      <div className={styles.SideBar}>
        <ExpanPanel title="Search By Name">
          <TextInput />
        </ExpanPanel>
        <ExpanPanel title="Filter By Type">
          <CheckboxesGroup onCheckboxChange={this.onChangeCheckbox} />
        </ExpanPanel>
        <ExpanPanel title="Is Opened Now">
          <p>lalala</p>
        </ExpanPanel>
      </div>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
    restaurants: getRestaurants(state),
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
// export default SideBar;
