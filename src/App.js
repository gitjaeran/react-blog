/**eslint-disable : Lint 끄기 */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "성수 맛집"; //자료를 잠깐 저장할 땐 변수
  let [postName, setPostName] = useState([
    "가로수 커피 맛집",
    "서울숲 포토존 명당",
    "논현 맛집",
  ]); //state로도 자료를 잠깐 저장할 수 있다.
  let [like, setLike] = useState([0, 0, 0]);
  let [openModal, setOpenModal] = useState(false);
  /**왜 state를 써야하는가?
   * 변수는 변경되면 HTML도 변경되어야 하는데 자동으로 반영되지 않음
   * state는 state를 쓰던 HTML이 변경되면 리렌더링됨
   */

  /**Destructuring 문법
   * let num = [1, 2];
   * 위의 1과 2가 너무 유용하게 사용되는 나머지 아예 변수로 빼고싶을 때
   * let [a, c] = [1, 2];
   * let a = num[0]; -> a = 1
   * let c = num[1]; -> c = 2
   */

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>REACT BLOG</h4>
      </div>

      {/* <div className="list">
        <button
          onClick={() => {
            let postNameCopy = [...postName];
            postNameCopy.sort();
            setPostName(postNameCopy);
          }}
        >
          💡가나다순 정렬
        </button>

        <h4 onClick={() => setOpenModal(!openModal)}>
          {postName[0]}
          <span onClick={() => (like === 0 ? setLike(1) : setLike(0))}> ❤</span>
          {like}
        </h4>
        <p>8월 07일 발행</p>
        <button
          onClick={() => {
            let postNameCopy = [...postName];
            postNameCopy[0] = "성수 파스타 맛집";
            setPostName(postNameCopy);
          }}
        >
          📝제목 수정
        </button>
      </div>
      <div className="list">
        <h4 onClick={() => setOpenModal(!openModal)}>{postName[1]}</h4>
        <p>8월 07일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => setOpenModal(openModal ? false : true)}>
          {postName[2]}
        </h4>
        <p>8월 07일 발행</p>
      </div> */}

      {
        /**map()
         * 1. array 자료 갯수 만큼 함수 안의 코드를 실행해줌
         * 2. 함수의 파라미터는 array 안에 있던 자료임
         * 3. return값은 array에 담기는 data
         *
         * 1. array 자료만큼 내부코드 실행
         * 2. return문의 내용을 array로 담아줌
         * 3. 유용한 파라미터 2개(array 안에 있던 data, 반복문 돌때마다 0부터 1씩 증가하는 정수) 사용가능
         */
        // [1, 2, 3].map(function () {
        //   return <div>map</div>
        // });
        // => [<div>map</div>,<div>map</div>,<div>map</div>]
        postName.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => setOpenModal(!openModal)}>
                {a}, i:{i}
                <span
                  onClick={() => {
                    let likeCopy = [...like];
                    likeCopy[i] = likeCopy[i] === 1 ? 0 : 1;
                    setLike(likeCopy);
                  }}
                >
                  ❤
                </span>
                {like[i]}
              </h4>
              <p>8월 07일 발행</p>
            </div>
          );
        })
      }

      {/**삼항연산자(ternary operator)
       * {조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드}
       */}
      {openModal ? <Modal /> : null}
      {/* <ReportComponent /> */}
    </div>
  );
}

/**Component화 기준
 * 1. 반복적인 HTML 축약
 * 2. 큰/다른 페이지
 * 3. 자주 변경되는 UI
 * 4. 팀원과 협업시 페이지를 나누어 작업 분배
 *
 * Component 단점
 * state를 가져다 쓸때 불편함(props).
 * (A 함수에 있던 변수는 B 함수에서 사용 불가)
 */
function Modal() {
  /**동적인 UI 만드는 Step
   * 1. HTML, CSS로 미리 디자인 완성
   * 2. UI의 현재 상태를 State로 저장
   * 3. State에 따라 UI가 어떻게 보일지 작성
   */
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// const ReportComponent = () => {
//   return (
//     <>
//       <div className="modal">연습용 화살표 함수 컴포넌트</div>
//     </>
//   );
// };

export default App;
