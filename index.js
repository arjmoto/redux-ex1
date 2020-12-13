const { createStore } = require('redux');
// action creator
//hard-coded string
const actions = [
    { type: 'CHANGE_SPEED', payload: 3},//speed: 3, lastSpeed: 1 
    // { type: 'TURN_OFF'},//speed: 0, lastSpeed: 3
    // { type: 'TURN_ON'}//speed: 3, lastSpeed: 3
];
const TURN_OFF = 'TURN_OFF';
const TURN_ON = 'TURN_ON';
const CHANGE_SPEED = 'CHANGE_SPEED';
const turnOff = ()=>({
    type: TURN_OFF
});
const turnOn = ()=>({
    type: TURN_ON
})
const changeSpeed = (speed)=>({
    type: CHANGE_SPEED,
    payload: speed
})

const initState = {
    speed: 0,
    lastSpeed: 1
};
const reducer = (state  = initState, action)=> {
    console.log(action);
    switch(action.type){
        case CHANGE_SPEED:
            return {
                ...state,
                speed: action.payload
            }
        case TURN_OFF:
            return {
                ...state,
                speed: 0,
                lastSpeed: state.speed
            };   
        case TURN_ON:
            return {
                ...state,
                speed: state.lastSpeed
            }
        default:
            return state;
    }
    
}

const store = createStore(reducer);
// console.log(store.getState());
// store.dispatch({ type: 'CHANGE_SPEED', payload: 3});
// console.log(store.getState());
// store.dispatch({ type: 'CHANGE_SPEED', payload: 2});
// console.log(store.getState());
// store.dispatch({ type: 'TURN_OFF'});
// console.log(store.getState());
// store.dispatch({ type: 'TURN_ON'});
// console.log(store.getState());

console.log(store.getState());
store.dispatch(changeSpeed(3));
console.log(store.getState());
store.dispatch(changeSpeed(2));
console.log(store.getState());
store.dispatch(turnOff());
console.log(store.getState());
store.dispatch(turnOn());
console.log(store.getState());