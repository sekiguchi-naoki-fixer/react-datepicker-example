import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    const d = new Date('2019-06-30');
    this.state = {
      selectedDate: d,
      startDate: d,
      endDate: new Date(moment(d).add(7, 'days').valueOf())
    };
    this.renderCustomHeader = this.renderCustomHeader.bind(this);
  }

  handleChange = date => {
    this.setState({
      selectedDate: date
    });
  };

  renderCustomHeader = ({ date }) => {
    return (
      <div
        style={{ margin: 10 }}
      >
        <div>
          <span> {''} 年 </span>
        </div>
        <div>
          <span> {'' + 1} 月 </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <DatePicker
        inline
        fixedHeight
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        minDate={this.state.startDate}
        maxDate={this.state.endDate}
        monthsShown={2}
      />
    );
  }
}