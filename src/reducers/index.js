import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDER
} from '../actions';

function food (state = {}, action) {
    switch(action.type) {
        case ADD_RECIPE :
            const { recipe } = action;
            
            return {
                ...state,
                [recipe.label]: recipe 
            }
            default :
            return state 
        }
}

            
const initialCalenderState = {
    sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
}, 
    monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
}, 
    tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
},
    wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
},
    thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
},
    friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
},
    saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
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