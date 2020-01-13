import React, { Component } from 'react';
import axios from '../../axios';
import UsersList from '../../components/UsersList/UsersList';
import MonthList from '../../components/MonthList/MonthList';
import UserContext from './../../context/UsersContext';

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
    this.loadUsersData();
  }

  loadUsersData = () => {
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
  };

  mouseOverHandler = month => {
    this.setState({ activeList: this.state.monthsData[month] });
  };

  mouseLeaveHandler = () => {
    this.setState({ activeList: null });
  };

  render() {
    return (
      <div>
        <UserContext.Provider value={{
          mouseOver: this.mouseOverHandler,
          mouseLeave: this.mouseLeaveHandler,
          ...this.state
        }}>
          <MonthList />
          <UsersList activeList={this.state.activeList} />
        </UserContext.Provider>
      </div>
    );
  }
}

export default MonthsList;
