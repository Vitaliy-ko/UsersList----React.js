import React, { Component } from 'react';
import axios from '../../axios';
import UsersList from '../../components/UsersList/UsersList';
import Month from '../../components/Month/Month';
import styles from './MonthsList.module.css';

class MonthsList extends Component {
  state = {
    monthsData: {},
    monthList: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    error: false,
    activeList: null
  };

  componentDidMount() {
    const { monthList } = this.state;
    axios
      .get('users')
      .then(res => {
        const monthsData = {};
        const users = res.data;
        for (let user of users) {
          const month = new Date(user.dob).getMonth();
          if (!monthsData.hasOwnProperty(monthList[month])) {
            monthsData[monthList[month]] = [];
          }
          monthsData[monthList[month]].push(user);
        }
        this.setState({ monthsData });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  mouseOverHandler = month => {
    this.setState({ activeList: this.state.monthsData[month] });
  };

  mouseLeaveHandler = () => {
    this.setState({ activeList: null });
  };

  render() {
    let months = null;
    if (!this.state.error) {
      months = <p className={styles.MonthsList}>Loading...</p>;
    } else {
      months = <p className={styles.MonthsList}>Data can't be loaded!</p>;
    }

    if (Object.entries(this.state.monthsData).length !== 0) {
      months = (
        <ul className={styles.MonthsList}>
          {Object.keys(this.state.monthsData).map(month => (
            <Month
              mouseOver={() => this.mouseOverHandler(month)}
              mouseLeave={() => this.mouseLeaveHandler()}
              monthsData={this.state.monthsData}
              month={month}
            />
          ))}
        </ul>
      );
    }

    return (
      <div>
        {months}
        <UsersList activeList={this.state.activeList} />
      </div>
    );
  }
}

export default MonthsList;
