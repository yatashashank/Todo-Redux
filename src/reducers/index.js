import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants'

//remind helper function
const remind = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const removeByID = (state = [], id) => {
    const reminders = state.filter(inp => inp.id !== id);
    console.log('new reduced reminder', reminders);
    return reminders
}
//Reducer is named reminders
const reminders = (state = [], action) => {
    let rem = null;
    switch (action.type) {
        case ADD_REMINDER:
            rem = [...state, remind(action)];
            console.log('ADD_reminder form reducer', rem);
            return rem;
        case DELETE_REMINDER:
            rem = removeByID(state, action.id);
            console.log('remove reminder from reduce', rem);
            return rem;
        case CLEAR_REMINDER:
            rem = [];
            return rem
        default:
            return state;

    }

}

export default reminders;