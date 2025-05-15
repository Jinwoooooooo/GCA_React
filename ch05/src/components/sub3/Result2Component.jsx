import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const Result2Component = () => {
  // 주소 파라미터 처리 훅
  const { name, email, age } = useParams();

  return (
    <div className="Result2Component">
      <h4>Result2Component</h4>

      <p>
        이름 : {name}
        <br />
        이메일 : {email}
        <br />
        나이 : {age}
        <br />
      </p>
    </div>
  );
};
