import React, { useEffect, useState } from "react";

export const UseEffectComponent = () => {
    // state 선언
    const [name, setName] = useState("홍길동");
    const [age, setAge] = useState(21);

    useEffect(() => {
        // mount 단계
        console.log("mount...");

        return () => {
            // unmount 단계
            console.log("unmount...");
        };
    }, []); // 의존성 배열(반응변수)

    useEffect(() => {
        // update 단계
        console.log("update...");
    });

    useEffect(() => {
        console.log("name or age update...");
    }, [name, age]);

    return (
        <div className="UseEffectComponent">
            <h4>UseEffectComponent</h4>

            {/* prettier-ignore */}
            <>
        <p>이름 : {name}</p>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value);}}
        />
      </>

            {/* prettier-ignore */}
            <>
        <p>나이 : {age}</p>
        <input type="text" value={age} onChange={(e) => {setAge(e.target.value);}}
        />
      </>
        </div>
    );
};
