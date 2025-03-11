"use client"

import { configureStore } from "@reduxjs/toolkit"
import listReducer from "./listSlice"

export const store=configureStore({
    reducer:listReducer
})