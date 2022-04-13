REDUX ::: THREE PRINCIPLES 

Redux is a state management tool . Whenever your application is growing in such a way that one single is having three or more child components in a chain format.

Parent.js  <- Child1.js  <- Child2.js  <- Child3.js 


<Child1/>		<Child2/>


Just imagine you have any data(present in parent) which is used only in Parent.js and Child3.js . But based on above structure we will have to pass the data in Child1 and Child2 as well where this data is not even required.


Three principles :

1> SSOT : single source of truth. All the state variables that is required to be shared with multiple component that will be kept inside the store of redux.

2> Action : Every action has a change in state. If you want to update the state variable value which is present in redux store then you can not update by using setState or useState hook . You will have to pass or fire an action to update the state variable value. This also contains action types (uppercase letter) , this helps to understand that at which action type what action has to be fired.

3> Pure Function : Reducer : Reducer is a pure function. To update the state variable value we need to return the action type and new value of state from action. This will automatically come to the respective reducer function , this function takes in two param i.e. state , action . Since it is a pure function so the state object which it receives as a param it will not update that value , instead of it will return you the new state object. 


mapStateToProps / useSelector : helps to connect with state of the redux store and component

mapDispatchToProps / useDispatch : helps you to connect with what actions you have to fire.

connect 

createStore

combineReducer

Complete application should be wrapped with Provider component

redux   react-redux    
