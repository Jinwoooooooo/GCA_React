import React, { useContext } from "react";
import { ContextChildComponent } from "./ContextChildComponent";
import CounterContext from "../contexts/CounterContext";

export const ContextParentComponent = () => {
    const { count, increment, decrement, reset } = useContext(CounterContext);

    return (
        <div className="ContextParentComponent">
            <h4>ContextParentComponent</h4>
            <p>
                ContextParent Count : {count}
                <br />
                {/* prettier-ignore */}
                <>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
                <button onClick={() => {reset(0);}}>리셋</button>
                </>
            </p>
            <ContextChildComponent />
        </div>
    );
};
