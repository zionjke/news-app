import {combineReducers} from "@reduxjs/toolkit";
import {newsSlice} from "./news-reducer";

export const rootReducer = combineReducers({
    news: newsSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>