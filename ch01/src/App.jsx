import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*
  날짜 : 2025/05/12
  이름 : 정진우
  내용 : 1장 리액트 개요 및 개발환경 설정
  
  개발 환경 구축
  1. Node.js 설치
  2. VSCode 플러그인 설치
    - React Snippet 도구
    - ESLint
    - Prettier
  3. 브라우저 확장 도구
    - React Developer Tool

  프로젝트 생성
  > npm create vite@latest
    - 프로젝트 명, React 선택, JS + SWC 선택.

  프로젝트 실행
  > npm run dev
*/

function App() {
    return (
        <>
            <h3>ch01.React 개요 및 개발환경 설정</h3>
            <hr />
            <h4>Hello, World!</h4>
            <h4>Hello, React!</h4>
        </>
    );
}

export default App;
