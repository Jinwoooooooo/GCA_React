import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { User3List } from "./User3List";
import { User3Register } from "./User3Register";
import { User3Modify } from "./User3Modify";

export const User3Component = () => {
    return (
        <div className="User3Component">
            <h4>User3Component</h4>
            <p>
                <Link to="/user3/list">목록</Link>
                <Link to="/user3/register">등록</Link>
            </p>

            <Routes>
                <Route path="/user3/list" element={<User3List />} />
                <Route path="/user3/register" element={<User3Register />} />
                <Route path="/user3/modify" element={<User3Modify />} />
            </Routes>
        </div>
    );
};
