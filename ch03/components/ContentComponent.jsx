import React from "react";

export const ContentComponent = ({ children }) => {
    // 내용 참조 매개변수 이름은 반드시 {children} 이어야 함
    return (
        <div className="ContentComponent">
            <h4>ContentComponent</h4>
            {children}
        </div>
    );
};

export default ContentComponent;
