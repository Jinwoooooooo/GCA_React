import React from "react";
import { Outlet } from "react-router-dom";

export const ParentComponent = () => {
  return (
    <div
      className="ParentComponent"
      style={{ backgroundColor: "#eee", padding: "10px" }}
    >
      <h5>ParentComponent</h5>

      {/* 자식 라우팅 컴포넌트 출력 */}
      <Outlet />
    </div>
  );
};
