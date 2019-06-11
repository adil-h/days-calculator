import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
  
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      endDate : new Date(),
      errorMsg : '',
      result : null,
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.calculateDays = this.calculateDays.bind(this);
  }
 
  handleStartDateChange(date) {
    this.setState({startDate: date})
  }

  handleEndDateChange(date) {
    this.setState({endDate: date})
  }

  calculateDays() {
    let {startDate, endDate} = this.state;
    if(startDate && endDate ){

        let amount = moment(endDate).startOf('day').diff(moment(startDate).startOf('day'), 'days');
        if(amount <= 0){
            this.setState({errorMsg : 'end date must be after start date'});
        }else{
            this.setState({errorMsg : ''});
            this.setState({result : 'the difference in days is : '+amount});
        }

    }else{
        this.setState({errorMsg : 'please fill both dates.'});
    }
  }

  render() {
    return (

    <div className="calculator">
        <div className="gastart-date">
        <label >Start Date: </label>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartDateChange}
            />
        </div>
        <div className="end-date">
        <label >End Date: </label>
            <DatePicker 
                selected={this.state.endDate}
                onChange={this.handleEndDateChange}
            />
        </div>
        <div>
            
        <button onClick={this.calculateDays}>
            Calculate Days
        </button>
        </div>
        <div>
            <label className="result" >{this.state.result}</label>
        </div>
        <div>
            <label className="errorMsg" >{this.state.errorMsg}</label>
        </div>
    </div>
    );
  }
}

export default Calculator;