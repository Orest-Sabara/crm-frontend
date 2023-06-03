import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {crmService} from "../../services";
import {AxiosError} from "axios";

interface UserState {
    user: any[];
    userForUpdate: any | null;
    errors: any | null;
    loading: any | null;
}

const initialState: UserState = {
    user: [],
    userForUpdate: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_,thunkAPI) => {
        try {
            const {data} = await crmService.getAll();
            return data
        } catch (e: unknown) {
            const axiosError = e as AxiosError;
            if (axiosError.response) {
                return thunkAPI.rejectWithValue(axiosError.response.data);
            }
            throw e;
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload;
            state.loading = false;
        });
    }
});

const {reducer:userReducer} = userSlice;

const userActions = {
    getAll
}

export {
    userReducer,
    userActions
}














