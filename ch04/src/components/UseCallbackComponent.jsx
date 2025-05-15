import React, { useCallback, useEffect, useState } from "react";

export const UseCallbackComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // 핸들러 함수
    const buttonHandler = useCallback(() => {
        setCount((preCount) => {
            return preCount + 1;
        });
    }, []);

    buttonHandler.id = buttonHandler.id || crypto.randomUUID();

    console.log("현재 buttonHandler.id : ", buttonHandler.id);

    useEffect(() => {
        console.log("buttonHandler update...");
    }, [buttonHandler]);

    return (
        <div className="UseCallbackComponent">
            <h4>UseCallbackComponent</h4>

            <p>
                count : {count}
                <button onClick={buttonHandler}>증가</button>
            </p>
        </div>
    );
};
