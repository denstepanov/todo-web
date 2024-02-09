import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initValue: CounterState = {
  value: 0,
};

function incrementReducer(state: CounterState) {
  state.value += 1;
}

function decrementReducer(state: CounterState) {
  state.value -= 1;
}

function incrementByAmountReducer(
  state: CounterState,
  action: PayloadAction<number>,
) {
  state.value += action.payload;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: initValue,
  reducers: {
    increment: incrementReducer,
    decrement: decrementReducer,
    incrementByAmount: incrementByAmountReducer,
  },
  // extraReducers: (builder) => {
  //   builder
  //     // .addCase(incrementAsync.pending, (state) => {
  //     //   console.log("incrementAsync.pending");
  //     // })
  //     .addCase(
  //       incrementAsync.fulfilled,
  //       (state: CounterState, action: PayloadAction<number>) => {
  //         state.value += action.payload;
  //       },
  //     );
  // },
});

// Асинхронное действие. Очень простой пример, до которого я явно не дорос.
// export const incrementAsync = createAsyncThunk(
//   "counter/incrementAsync",
//   async (amount: number) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return amount;
//   },
// );

export const { increment, decrement } = counterSlice.actions;
