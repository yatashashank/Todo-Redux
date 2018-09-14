import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants'

//creating a addReminder actionCreator attribute
export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('Action for add is', action)
    return action;
}


//Creating a deleteREminder actionCreator attribute

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('Action for delete is', action)
    return action
}

export const clearReminder = () => {
    const action = {
        type: CLEAR_REMINDER,
    }
    return action
}