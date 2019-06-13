import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.renderCustomHeader = this.renderCustomHeader.bind(this);
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  renderCustomHeader = ({
    date,
    changeYear,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  }) => {
    const year = moment(date).year();
    const month = moment(date).month();
    const decreaseYear = () => {
      const y = moment(date).year(year - 1);
      changeYear(y.year());
    };
    const increaseYear = () => {
      const y = moment(date).year(year + 1);
      changeYear(y.year());
    };
    return (
      <div
        style={{ margin: 10 }}
      >
        <div>
          <button
            onClick={decreaseYear}
            disabled={this.state.prevYearButtonDisabled}
          >
            {"<"}
          </button>
          <span> {year} 年 </span>
          <button
            onClick={increaseYear}
            disabled={this.state.nextYearButtonDisabled}
          >
            {">"}
          </button>
        </div>
        <div>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {"<"}
          </button>
          <span> {month + 1} 月 </span>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {">"}
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <DatePicker
        inline
        fixedHeight
        renderCustomHeader={this.renderCustomHeader}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}