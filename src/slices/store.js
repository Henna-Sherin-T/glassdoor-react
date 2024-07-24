// src/store.js
import { configureStore } from '@reduxjs/toolkit'

import  jobSlice  from './jobSlice/JobSlice'

const store = configureStore({
  reducer: {
    job: jobSlice
  },
  devTools: true
});

export default store
