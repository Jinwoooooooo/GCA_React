import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export const ContextUserRegistComponent = () => {
    // 전역 State
    const { users, setUsers } = useContext(UserContext);

    // 지역 State
    const [user, setUser] = useState({ uid: "", name: "", age: 0 });

    // 핸들러
    const changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setUsers([...users, user]);
    };

    return (
        <div className="ContextUserRegistComponent">
            <h4>User 등록</h4>
            {/* prettier-ignore */}
            <form onSubmit={submitHandler}>
                <input type="text" name="uid" value={user.uid} onChange={changeHandler} /><br />
                <input type="text" name="name" value={user.name} onChange={changeHandler} /><br />
                <input type="text" name="age" value={user.age} onChange={changeHandler} /><br />
                <input type="submit" value={"저장"} />
            </form>
        </div>
    );
};
