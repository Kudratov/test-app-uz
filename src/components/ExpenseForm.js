import 'react-dates/initialize';
import React from 'react';
import monent from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
// import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: '1231',
            calendarFocused: false,
            error: ''
        }
    }

    onChangeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        });
    }

    onChangeNote = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            }
        });
    }

    onAmountChane = (e) =>  {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => {
                return {
                    amount: amount.replace(/^(.{4})(.{6})(.*)$/, "$1 $2 $3")
                }
            });
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => {
            return{
                createdAt
            }
        });
    }

    onFocusChange = ({focused}) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            }
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => {
                return {
                    error: 'Please provide description and amount'
                }
            });
        } else {
            this.setState(() => {
                return {
                    error: ''
                }
            });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: '123134',
                note: this.state.note
            });
        }
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.description} onChange={this.onChangeDescription} placeholder="Description" autoFocus/>
                    <input type="text" value={this.state.amount} onChange={this.onAmountChane} placeholder="Amount"/>
                    <textarea placeholder="Add a note for your expense" value={this.state.value} onChange={this.onChangeNote}></textarea>
                    {/* <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} displayFormat="DD-MM-YYYY" onFocusChange={this.onFocusChange} id="1"/> */}
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}