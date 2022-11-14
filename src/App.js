import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Form from "./components/Form";
// import Display from "./components/Display";
// import Add from "./components/Add";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Form/> } />
      </Routes>
    </div>
  );
}

export default App;