import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const User1List = () => {
    // 기본 State
    const [users, setUsers] = useState([]);

    // 마운트(렌더링) 되기 전에 서버 데이터 가져오기
    useEffect(() => {
        console.log("Here...1");
        axios
            .get("http://localhost:8080/ch09/user1")
            .then((response) => {
                console.log("Here...2 : " + response);
                setUsers(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="User1List">
            <h4>User1 목록</h4>

            <table border={1}>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>휴대폰</th>
                        <th>나이</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.uid}</td>
                            <td>{user.name}</td>
                            <td>{user.hp}</td>
                            <td>{user.age}</td>
                            <td>
                                <button onClick={null}>수정</button>
                                <button onClick={null}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
