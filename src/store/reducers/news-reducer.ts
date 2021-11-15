import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsStateType, NewsType} from "../../types";
import {fetchNews} from "../../api";
import {RootState} from "./index";

export const fetchNewsSuccess = createAsyncThunk('news/fetchNewsSuccess', async (param, {rejectWithValue}) => {
    try {
        const data = await fetchNews()
        if (data.status === 'ok') {
            return data.articles
        } else {
            throw new Error(data.message)
        }
    } catch (e: any) {
        return rejectWithValue(e.response.data.message)
    }
})

const initialState: NewsStateType = {
    data: [],
    currentNews: null,
    error: '',
    isLoading: false
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setCurrentNews(state, action: PayloadAction<NewsType>) {
            state.currentNews = action.payload
        }
    },
    extraReducers: {
        [fetchNewsSuccess.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchNewsSuccess.fulfilled.type]: (state, action: PayloadAction<NewsType[]>) => {
            state.data = action.payload
            state.isLoading = false
            state.error = ''
        },
        [fetchNewsSuccess.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {setCurrentNews} = newsSlice.actions

export const news = (state: RootState) => state.news.data