import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { User5List } from "./User5List";
import { User5Register } from "./User5Register";
import { User5Modify } from "./User5Modify";

export const User5Component = () => {
    return (
        <div className="User5Component">
            <h4>User5Component</h4>
            <p>
                <Link to="/user5/list">목록</Link>
                <Link to="/user5/register">등록</Link>
            </p>

            <Routes>
                <Route path="/user5/list" element={<User5List />} />
                <Route path="/user5/register" element={<User5Register />} />
                <Route path="/user5/modify" element={<User5Modify />} />
            </Routes>
        </div>
    );
};
