import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDER
} from '../actions';

const initialCalenderState = {
    sunday: {
    breakfast: null,
    lunch: null,
    dineer: null,
}, 
    monday: {
    breakfast: null,
    lunch: null,
    dineer: null,
}, 
    tuesday: {
    breakfast: null,
    lunch: null,
    dineer: null,
},
    wednesday: {
    breakfast: null,
    lunch: null,
    dineer: null,
},
    thursday: {
    breakfast: null,
    lunch: null,
    dineer: null,
},
    friday: {
    breakfast: null,
    lunch: null,
    dineer: null,
},
    saturday: {
    breakfast: null,
    lunch: null,
    dineer: null,
},
}


function calender (state=initialCalenderState, action){
    const { day, recipe, meal } = action;
    
    switch(action.type) {
        case 'ADD_RECIPE':
            return {
                ...state,
                [day]: {
                ...state[day],
                [meal]: recipe.label,
             }
            }
        case 'REMOVE_FROM_CALENDER':
            return {
                ...state,
                [day]: {
                ...state[day],
                [meal]: null,
            }
            }
        default:
            return state 
    }
}
export default calender;