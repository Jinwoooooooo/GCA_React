import "./App.css";
import { UseReducerComponent } from "./components/UseReducerComponent";
import { UseRefComponent } from "./components/UseRefComponent";
import { UseStateComponent } from "./components/UseStateComponent";

/*
  날짜 : 2025/05/13
  이름 : 정진우
  내용 : 4장 리액트 훅 
*/

function App() {
    return (
        <>
            <h4>4장 리액트 훅</h4>

            {/* useRef hook */}
            <UseRefComponent />
            <UseRefComponent />

            {/* useState hook */}
            <UseStateComponent />

            {/* useReducer hook */}
            <UseReducerComponent />

            {/* useEffect hook */}

            {/* useMemo hook */}

            {/* useCallback hook */}

            {/* useCustom hook */}
        </>
    );
}

export default App;
