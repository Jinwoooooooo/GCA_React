import React from "react";

export const User2List = () => {
    return (
        <div className="User2List">
            <h4>User2 목록</h4>

            <table border={1}>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>휴대폰</th>
                    <th>나이</th>
                    <th>관리</th>
                </tr>
                <tr>
                    <td>A101</td>
                    <td>홍길동</td>
                    <td>010-1234-4321</td>
                    <td>25</td>
                    <td>
                        <button onClick={null}>수정</button>
                        <button onClick={null}>삭제</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};
