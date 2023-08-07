/**eslint-disable : Lint 끄기 */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "성수 맛집"; //자료를 잠깐 저장할 땐 변수
  let [postName, setPostName] = useState([
    "성수 커피 맛집",
    "서울숲 포토존 명당",
    "서울숲 맛집",
  ]); //state로도 자료를 잠깐 저장할 수 있다.
  let [like, setLike] = useState(0);
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
      <div className="list">
        <h4>
          {postName[0]}
          <span onClick={() => (like === 0 ? setLike(1) : setLike(0))}> ❤</span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
        <span
          onClick={() => {
            let postNameCopy = [...postName];
            postNameCopy[0] = "성수 파스타 맛집";
            setPostName(postNameCopy);
          }}
        >
          📝제목 수정
        </span>
      </div>
      <div className="list">
        <h4>{postName[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{postName[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
