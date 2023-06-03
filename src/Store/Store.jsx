import { configureStore } from "@reduxjs/toolkit";
import InputSlice from "./Slice/InputSlice";

const Store = configureStore({
    reducer:{
        input:InputSlice,
    }
})

export default Store;