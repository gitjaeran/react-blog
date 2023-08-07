import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "성수 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>BLOG</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
