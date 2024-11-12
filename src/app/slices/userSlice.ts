import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../thunks/userThunks";
import { Status } from "../../enums";

type UserState = {
    status: Status;
    user: object;
    error: string | null;
};

const initialState: UserState = {
    status: Status.Idle,
    user: {},
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = Status.Succeeded;
                state.user = action.payload?.data;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload as string;
            });
    },
});

export default userSlice.reducer;
