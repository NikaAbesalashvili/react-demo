import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import axiosInstance from "../../api/axiosInstance";

type RegisterPayload = {
    name: string,
    email: string,
    password: string,
};

export const registerUser = createAsyncThunk(
    'users',
    async (payload: RegisterPayload, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users', payload);
            const responseData = {
                status: response.status,
                data: response.data,
            };
            
            return responseData;
        } catch (error) {
            const axiosError = error as AxiosError;

            if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
        };
});
