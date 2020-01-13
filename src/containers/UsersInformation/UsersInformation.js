import React, { Component } from 'react';
import axios from '../../axios';
import UsersList from '../../components/UsersList/UsersList';
import MonthsList from '../../components/MonthsList/MonthsList';
import UserContext from './../../context/UsersContext';

class UsersInformation extends Component {
  state = {
    monthsData: {},
    monthsList: [
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
    activeList: null,
    activeListStyle: ''
  };

  componentDidMount() {
    this.loadUsersData();
  }

  loadUsersData = () => {
    const { monthsList } = this.state;
    axios
      .get('users')
      .then(res => {
        const monthsData = {};
        const users = res.data;

        for (let user of users) {
          const month = new Date(user.dob).getMonth();
          if (!monthsData.hasOwnProperty(monthsList[month])) {
            monthsData[monthsList[month]] = [];
          }
          monthsData[monthsList[month]].push(user);
        }

        this.setState({ monthsData });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  mouseOverHandler = (month, activeListStyle) => {
    this.setState({ activeList: this.state.monthsData[month], activeListStyle});
  };

  mouseLeaveHandler = () => {
    // this.setState({ activeList: null });
  };

  render() {
    return (
        <UserContext.Provider value={{
          mouseOver: this.mouseOverHandler,
          mouseLeave: this.mouseLeaveHandler,
          ...this.state
        }}>
          <MonthsList />
          <UsersList activeList={this.state.activeList} />
        </UserContext.Provider>
    );
  }
}

export default UsersInformation;
