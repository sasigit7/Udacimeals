import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalender } from '../actions';
import { capitalize } from '../utils/helper';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';

class App extends Component {
//    doThing = () => {
        //this.props.dispatch(addRecipe({}))
//        this.props.selectRecipe({})
//    }
//    state = {
//        calender: null 
//    }
//    
//    componentDidMount () {
//        const { store } = this.props 
//        store.subscribe(() => {
//            this.setState(() => ({
//                calender: store.getState()
//            }))
//        })
//    }

//  submitFood = () => {
//      this.props.store.dispatch(addRecipe({
//          day: 'monday',
//          meal: 'breakfast',
//          recipe: {
//              label: this.input.value 
//          }
//      }))
//      
//      this.input.value = ''
//  }
    render() {
        //console.log('Props', this.props);
        
        const { calender, remove } = this.props;
        const mealOrder = ['breakfast', 'lunch', 'dinner']
        
        return (
            <div className='container'>
            <ul className='meal-types'>
            {mealOrder.map((mealType) => (
             <li key={mealType} className='subheader'>
            {capitalize(mealType)}
            </li>
           ))}
         </ul>
        
             <div className='calendar'>
          <div className='days'>
              {calender.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
           </div>
            <div className='icon-grid'>
              {calender.map(({ day, meals }) => (
                <ul key={day}>
                  {mealOrder.map((meal) => (
                    <li key={meal} className='meal'>
                      {meals[meal]
                        ? <div className='food-item'>
                            <img src={meals[meal].image} alt={meals[meal].label}/>
                            <button onClick={() => remove({meal, day})}>Clear</button>
                         </div>
                        : <button className='icon-btn'>
                            <CalendarIcon size={30}/>
                          </button>}
                     </li>
                 ))}
                </ul>
              ))}
            </div>
          </div>
         
         
        </div>
//        <input 
//            type="text"
//            ref={(input) => this.input = input}
//            placeholder="Monday's Breakfast"       
//         />
//                
//        <button onClick={this.submitFood}>Submit</button>   
//        
//        <pre>
//            Monday's Breakfast: {this.state.calender && this.state.calender.monday.breakfast}
//            </pre>
           
    )
 }
}

function mapStateToProps ({ calender, food }) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    return {
        calender: dayOrder.map((day) => ({
            day,
            meals: Object.keys(calender[day]).reduce(
                (meals, meal) => {
                   meals[meal] = calender[day][meal] 
                   ? food[calender[day][meal]] 
                   : null
                   
                   return meals
                }, {})
            }))
          }
        }

function mapDispatchToProps (dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalender(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
