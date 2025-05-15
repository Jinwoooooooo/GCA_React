import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

export const ContextChildComponent = () => {
    const { count, increment, decrement, reset } = useContext(CounterContext);
    return (
        <div className="ContextChildComponent">
            <h4>ContextChildComponent</h4>
            <p>
                ContextChild Count : {count}
                <br />
                {/* prettier-ignore */}
                <>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
                <button onClick={() => {reset(0);}}>리셋</button>
                </>
            </p>
        </div>
    );
};
