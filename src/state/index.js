import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    mode: "light",
    userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode= state.mode === 'light' ? "dark":'light';
        }
    }
})


export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;


//redux thunk
// Action types
//export const SET_MODE = "global/setMode";

// Action creators
//export const setMode = () => async (dispatch, getState) => {
  //const { mode } = getState().global;

  // Perform async operations here, if needed

  //dispatch({
   // type: SET_MODE,
    //payload: mode === "light" ? "dark" : "light",
  //});
//};

// Reducer
//const initialState = {
//   mode: "dark",
//   userId: "63701cc1f03239b7f700000e",
// };

// const globalReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_MODE:
//       return { ...state, mode: action.payload };
//     default:
//       return state;
//   }
// };

// export default globalReducer;
