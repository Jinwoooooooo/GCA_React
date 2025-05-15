import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UseRefComponent } from "./components/UseRefComponent";
import { UseStateComponent } from "./components/UseStateComponent";
import { UseReducerComponent } from "./components/UseReducerComponent";
import { UseEffectComponent } from "./components/UseEffectComponent";
import { UseMemoComponent } from "./components/UseMemoComponent";
import { UseCallbackComponent } from "./components/UseCallbackComponent";
import { UseCustomComponent } from "./components/UseCustomComponent";

/*
  날짜 : 2025/05/13
  이름 : 정진우
  내용 : 4장 리액트 훅
*/
function App() {
    return (
        <>
            <h3>4장 리액트 훅</h3>

            {/* useRef hook */}
            <UseRefComponent />
            <UseRefComponent />

            {/* useState hook */}
            <UseStateComponent />

            {/* useReducer hook */}
            <UseReducerComponent />

            {/* useEffect hook */}
            <UseEffectComponent />

            {/* useMemo hook */}
            <UseMemoComponent />

            {/* useCallback hook */}
            <UseCallbackComponent />

            {/* useCustom hook */}
            <UseCustomComponent />
        </>
    );
}

export default App;
