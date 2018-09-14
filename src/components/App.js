import React, { Component } from 'react';
import { addReminder, deleteReminder, clearReminder } from '../actions/index'
import { connect } from 'react-redux'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }

    }
    addReminder() {
        this.props.addReminder(this.state.text);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminder() {
        const newReminder = this.props.newReminder;
        return (
            <ul className='list-group col-sm-4'>
                {
                    newReminder.map(newRemi => {
                        return (
                            <li key={newRemi.id} className='list-group-item' >
                                <div className='list-item'>{newRemi.text}</div>
                                <div className='delbutton list-item'
                                    onClick={() => this.deleteReminder(newRemi.id)} >
                                    &#x274C;</div>
                            </li>
                        )
                    })
                }
            </ul>
        )

    }
    render() {
        return (
            <div className="APP">
                <div className="Title">
                    TODO APP
                </div>
                <div className="form-inline remind-form">
                    <input
                        type="text"
                        className="form-control inp"
                        placeholder="new todo...!!!!"
                        onChange={e => this.setState({ text: e.target.value })} />
                    <button className="btn btn-success" onClick={() => this.addReminder()}>ADD</button>
                    <button className="btn btn-danger del" onClick={() => this.props.clearReminder()}>Clear All</button>
                </div>
                {this.renderReminder()}
            </div>
        )
    }
}
const mapStateToProps = (state) => { return { newReminder: state } }
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminder })(App);