import "./App.css";
import ClassTypeComponent from "../components/ClassTypeComponent";
import FunctionalComponent from "../components/FunctionalComponent";
import ParentComponent from "../components/ParentComponent";
import PropsComponent from "../components/PropsComponent";
import ContentComponent from "../components/ContentComponent";
import StateComponent from "../components/StateComponent";
import LifeCycleComponent from "../components/LifeCycleComponent";

/*
  날짜 : 2025/05/13
  이름 : 정진우
  내용 : 3장 리액트 컴포넌트 
*/

function App() {
    return (
        <>
            <h3>3장 리액트 컴포넌트</h3>

            {/* 클래스형 컴포넌트 */}
            <ClassTypeComponent />

            {/* 함수형 컴포넌트 */}
            <FunctionalComponent />

            {/* 중첩 컴포넌트 */}
            <ParentComponent />

            {/* Props 컴포넌트 */}
            <PropsComponent
                title="프로퍼티 컴포넌트"
                message="속성을 갖는 컴포넌트"
            />

            {/* 내용을 갖는 컴포넌트 */}
            <ContentComponent>
                <h5>내용 제목입니다.</h5>
                <p>내용을 갖는 컴포넌트 입니다.</p>
            </ContentComponent>

            {/* State 컴포넌트 */}
            <StateComponent />

            {/* 컴포넌트 생명주기 */}
            <LifeCycleComponent />
        </>
    );
}

export default App;
