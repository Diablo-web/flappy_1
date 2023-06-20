import Mockman from "mockman-js";
import './App.css';
import { ScrollToTop } from "./frontend/components";
import { Main } from "./frontend/layouts";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Main/>
      </ScrollToTop>
      <h1>Hello World</h1>
      <Mockman />
    </div>
  );
}

export default App;
