import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { User4List } from "./User4List";
import { User4Register } from "./User4Register";
import { User4Modify } from "./User4Modify";

export const User4Component = () => {
    return (
        <div className="User4Component">
            <h4>User4Component</h4>
            <p>
                <Link to="/user4/list">목록</Link>
                <Link to="/user4/register">등록</Link>
            </p>

            <Routes>
                <Route path="/user4/list" element={<User4List />} />
                <Route path="/user4/register" element={<User4Register />} />
                <Route path="/user4/modify" element={<User4Modify />} />
            </Routes>
        </div>
    );
};
