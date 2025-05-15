import React from "react";
import { ReduxChildComponent } from "./ReduxChildComponent";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/counterSlice";

export const ReduxParentComponent = () => {
    const count = useSelector((state) => state.counter.count); // counter는 store 파일에 설정한 reducer 이름
    const dispatch = useDispatch(); // 리듀서 함수를 호출하는 함수
    return (
        <div className="ReduxParentComponent">
            <h4>ReduxParentComponent</h4>
            <p>
                ReduxParent Count : {count}
                <br />
                {/* prettier-ignore */}
                <>
                <button onClick={() => { dispatch(increment());}}>증가</button>
                <button onClick={() => { dispatch(decrement());}}>감소</button>
                <button onClick={() => { dispatch(reset(0));}}>리셋</button>
                </>
            </p>
            <ReduxChildComponent />
        </div>
    );
};
