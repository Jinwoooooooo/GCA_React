import React from "react";

export const User5Modify = () => {
    return (
        <div className="User5Modify">
            <h4>User5 수정</h4>
            {/* prettier-ignore */}
            <form onSubmit={null}>
                <table border={1}>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input type="text" name="uid" value={null} onChange={null} placeholder="아이디 입력"/>
                        </td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type="text" name="name" value={null} onChange={null} placeholder="아이디 입력"/>
                        </td>
                    </tr>
                    <tr>
                        <td>휴대폰</td>
                        <td>
                            <input type="text" name="hp" value={null} onChange={null} placeholder="아이디 입력"/>
                        </td>
                    </tr>
                    <tr>
                        <td>나이</td>
                        <td>
                            <input type="text" name="age" value={null} onChange={null} placeholder="아이디 입력"/>
                        </td>
                    </tr>
                    <tr colSpan={2} align="right">
                        <td><input type="submit" value={"수정"}/></td>
                    </tr>
                </table>
            </form>
        </div>
    );
};
