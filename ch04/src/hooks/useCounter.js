import React, { useReducer } from "react";

/*
    커스텀 훅 조건
     - 함수 내에서 리액트 훅을 사용하고 있어야 됨
     - 함수 내에서 재사용하고자 하는 값 또는 코드를 반환해야 됨
*/
function useCounter(init) {
    // 리듀서 정의
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "INCREASE":
                    return { count: state.count + 1 };
                case "DECREASE":
                    return { count: state.count - 1 };
                case "RESET":
                    return { count: 0 };
            }
        },
        { count: init }
    );

    const increaseDispatch = () => dispatch({ type: "INCREASE" });
    const decreaseDispatch = () => dispatch({ type: "DECREASE" });
    const resetDispatch = () => dispatch({ type: "RESET" });

    return [state, increaseDispatch, decreaseDispatch, resetDispatch];
}

export default useCounter;
