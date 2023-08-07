import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "성수 맛집"; //자료를 잠깐 저장할 땐 변수
  let [postName, setPostName] = useState("성수 맛집"); //state로도 자료를 잠깐 저장할 수 있다.
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
        <h4 id={post}>BLOG</h4>
      </div>
      <div className="list">
        <h4>{postName}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
