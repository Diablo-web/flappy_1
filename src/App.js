
import './App.css';
import { ScrollToTop } from "./frontend/components";
import { Router } from "./frontend/layouts";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Router/>
      </ScrollToTop>
      {/* <h1>Hello World</h1> */}
    
    </div>
  );
}

export default App;
