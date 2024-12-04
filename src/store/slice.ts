import { createSlice } from "@reduxjs/toolkit";

export interface IStoreData {
    isLoading: boolean;
    data: any;
    error: any;
}
export const slice = createSlice({
    name: 'customerList',
    initialState: {
        isLoading: false,
        data: null,
        error: null
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setData(state, action) {
            state.data = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})

export const { setLoading, setError, setData } = slice.actions;