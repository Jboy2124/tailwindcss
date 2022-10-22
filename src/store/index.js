// import { createStore } from 'redux';


// const reducerFunction = (state={counterStrike: 0} , action) => {

//     switch(action.type) {
//         case "Undefined":
//             return { counterStrike: 0 };
//         case "INC":
//             return { counterStrike: state.counterStrike + 1 };
//         case "DEC":
//             if(state.counterStrike > 0)
//                 return { counterStrike: state.counterStrike - 1 };
//             else
//                 return { counterStrike: 0 };
//         case "ADD":
//             return { counterStrike: state.counterStrike + action.payload }
            
//     }
//     return state;
// }

// const store = createStore(reducerFunction);

// export default store;


import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'firstCounter',
    initialState: {counterStrike: 0},
    reducers: {
        increment(state, action) {
            state.counterStrike++;
        },
        decrement(state, action) {
            if(state.counterStrike > 0)
                state.counterStrike--;
            else
                state.counterStrike = 0;
        },
        addValues(state, action) {
            state.counterStrike += action.payload;
        }
    }
});


const store = configureStore({
    reducer: counterSlice.reducer
});
export const actionStar = counterSlice.actions;
export default store;