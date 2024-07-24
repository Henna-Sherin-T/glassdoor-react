import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    jobs: [],
    status: "idle",
    error: null
}

export const getJobs = createAsyncThunk('job/getJobs', async () => {
    const res = await axios.get('https://job.kunjappu.online/api/portal-jobs')
    return res.data
})

 const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getJobs.fulfilled, (state, action) => {
                
                state.jobs = action.payload
                state.status = "succeeded"
            })
            .addCase(getJobs.rejected, (state, action) => {
                console.log('Rejected action error:', action.error); // Log error
                state.error = action.error.message
                state.status = "failed"
            })
            .addCase(getJobs.pending, (state) => {
                console.log('Pending state'); // Log pending state
                state.status = "loading"
            })
    }
})

export default jobSlice.reducer
