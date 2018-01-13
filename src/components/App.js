import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalender } from '../actions';

class App extends Component {
    doThing = () => {
        //this.props.dispatch(addRecipe({}))
        this.props.selectRecipe({})
    }
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
        console.log('Props', this.props);
        return (
            <div>Hello World!</div>
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

function mapStateToProps (calender) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    return {
        calender: dayOrder.map((day) => ({
            day,
            meals: Object.keys(calender[day]).reduce(
                (meals, meal) => {
                   meals[meal] = calender[day][meal] 
                   ? calender[day][meal]
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
