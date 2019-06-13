import * as React from 'react';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import styles from './MainPage.module.scss';
import Container from '@material-ui/core/Container';

class MainPage extends React.Component {
  render() {
    return (
      <div className={styles.MainPage_root}>
        <Container maxWidth="md" className={styles.MainPage_root}>
          <SideBar />
          <Content />
        </Container>
      </div>
    );
  }
}

export default MainPage;
