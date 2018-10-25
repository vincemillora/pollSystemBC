import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class CreatePoll extends Component {
    /* 
     * @details: Function that sets the date when the page is refreshed.
     */
    constructor() {
        super()
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /* 
     * @details: Gets the current date.
     */
    handleChange(date) {
        this.setState({
          startDate: date
        });
    }

    /* 
     * @details: Function that handles the data inputed from the forms.
     */
    handleSubmit(e){
        this.props.contractInstance.createPoll(
            this.refs.title.value, 
            this.refs.desc.value, parseInt(moment().format("YYYYMMDD")), parseInt(this.state.startDate.format("YYYYMMDD"))
        ,{gas: 300000}, (err, result) => {})
        e.preventDefault();
    }

    /* 
     * @details: renders the view.
     */
    render() {
        return (
            <div className="createbody">
                <h1 className="title">Create a Poll</h1>
                <br></br>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div class="input-field col s6">
                        <i class="material-icons prefix ">assessment</i>
                        <label>Poll Title</label><br/>
                        <div className="datepick createpoll">
                            <input className="_addInput" type="text" ref="title" />
                        </div>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">comment</i>
                        <label>Description</label><br/>
                        <div className="datepick createpoll">
                            <input className="_addInput" type="text" ref="desc" />
                        </div>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">date_range</i>
                        <label>Select End Date:</label><br/>
                        <div className="datepick createpoll">
                            <DatePicker className="_addInput" selected={this.state.startDate} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <br/>
                    <button class="btn right green waves-effect waves-light" value="Create" type="submit">Create <i class="material-icons right">add</i></button>
                </form>
            </div>
        );
    }
}
export default CreatePoll;
