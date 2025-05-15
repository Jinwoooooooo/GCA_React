import React, { useMemo, useState } from "react";

const hardCalc = (num) => {
    console.log("hardCalc...");
    for (let i = 0; i < 100_000_000; i++) {}
    return num + 1000;
};

const easyCalc = (num) => {
    console.log("easyCalc...");
    return num + 1000;
};

export const UseMemoComponent = () => {
    const [hardNum, setHardNum] = useState(1);
    const [easyNum, setEasyNum] = useState(1);

    //const hardResult = hardCalc(hardNum);
    const hardResult = useMemo(() => {
        return hardCalc(hardNum);
    }, [hardNum]);

    const easyResult = easyCalc(easyNum);

    return (
        <div className="UseMemoComponent">
            <h4>UseMemoComponent</h4>

            <p>
                hardNum :
                <input
                    type="number"
                    value={hardNum}
                    onChange={(e) => {
                        setHardNum(parseInt(e.target.value));
                    }}
                />
                <span>hardResult : {hardResult}</span>
            </p>

            <p>
                easyNum :
                <input
                    type="number"
                    value={easyNum}
                    onChange={(e) => {
                        setEasyNum(parseInt(e.target.value));
                    }}
                />
                <span>easyResult : {easyResult}</span>
            </p>
        </div>
    );
};
