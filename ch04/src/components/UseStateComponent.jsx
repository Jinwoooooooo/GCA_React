import React from "react";
import { useState } from "react";

export const UseStateComponent = () => {
    // state 선언 : state는 컴포넌트 내부에서 사용되는 값
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        uid: "",
        name: "",
        age: 0,
    });
    const [users, setUsers] = useState([]);

    // 핸들러
    const inputHandler = (e) => {
        setMessage(e.target.value);
    };

    // 전개 연산자 실습
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2);

    return (
        <div className="UseStateComponent">
            <h4>UseStateComponent</h4>
            <p>상태값 count : {count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                증가
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                감소
            </button>

            <p>{message}</p>
            <input type="text" value={message} onChange={inputHandler} />

            <p>
                아이디 : {user.uid}
                <br />
                이름 : {user.name}
                <br />
                나이 : {user.age}
                <br />
            </p>
            <input
                type="text"
                placeholder="아이디 입력"
                value={user.uid}
                onChange={(e) => {
                    setUser({ ...user, uid: e.target.value });
                }}
            />
            <br />
            <input
                type="text"
                placeholder="이름 입력"
                value={user.name}
                onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                }}
            />
            <br />
            <input
                type="text"
                placeholder="나이 입력"
                value={user.age}
                onChange={(e) => {
                    setUser({ ...user, age: e.target.value });
                }}
            />
        </div>
    );
};
