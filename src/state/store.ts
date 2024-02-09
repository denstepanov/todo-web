import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "@src/state/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Позволяет получить доступ ко всем свойствам хранилища.
export type AppDispatch = typeof store.dispatch;
