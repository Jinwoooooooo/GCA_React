import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { CounterContextProvider } from "../../ch06/src/contexts/CounterContext.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* Context Provider로 감싸서 App 하위 모든 컴포넌트에 컨텍스트(전역 저장소)를 제공(이용할 수 있게 해준다.) */}
        <UserContextProvider>
            <CounterContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </CounterContextProvider>
        </UserContextProvider>
    </StrictMode>
);
