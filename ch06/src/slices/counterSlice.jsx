import { createSlice } from "@reduxjs/toolkit";

// Redux 상태 선언
const initState = { count: 0 };

// Redux Slice(저장소) 생성
const counterSlice = createSlice({
    name: "counterSlice", // 저장소 이름이라고 생각하면 됨
    initialState: initState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = action.payload;
        },
    },
});

// Redux Actions 내보내기
export const { increment, decrement, reset } = counterSlice.actions;

// Redux Reducers 내보내기
export default counterSlice.reducer;
