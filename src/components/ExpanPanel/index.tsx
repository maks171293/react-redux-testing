import React, { Component, ReactNode } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import styles from './ExpanPanel.module.scss';
import ThreeDRotation from '@material-ui/core/Icon';

interface IExpanPanelProps {
  children: ReactNode;
  title: string;
}
interface IExpanPanelState {
  expanded: boolean;
}

export class ExpanPanel extends React.Component<IExpanPanelProps, IExpanPanelState> {
  state = {
    expanded: true
  }
  handleChange = (e: object, expanded: boolean): void => {
    this.setState({
      expanded
    })
  }
  render() {
    const { expanded } = this.state;
    const { children, title } = this.props;
    return (
      <div className={styles.ExpanPanel}>
        <ExpansionPanel className={styles.wrapper} expanded={expanded} onChange={this.handleChange}>
          <ExpansionPanelSummary
            expandIcon={<ThreeDRotation />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography >{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {children}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default ExpanPanel
