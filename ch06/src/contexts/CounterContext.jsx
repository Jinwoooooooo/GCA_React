import React, { createContext, useState } from "react";

// Context 객체 생성
const CounterContext = createContext();

// Provider 정의
export const CounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = (value) => {
        setCount(value);
    };

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
};

// Context 내보내기
export default CounterContext;
