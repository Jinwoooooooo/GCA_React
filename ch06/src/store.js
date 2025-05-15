import { configureStore } from "@reduxjs/toolkit";
import React from "react";

import counterReducer from "./slices/counterSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
