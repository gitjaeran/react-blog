import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "성수 맛집"; //자료를 잠깐 저장할 땐 변수
  let [postName, setPostName] = useState("성수 맛집");
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
