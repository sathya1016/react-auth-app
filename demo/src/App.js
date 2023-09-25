import LoginPage from "./Components/LoginPage";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Signup/>} path="/signup" />
          <Route element={<LoginPage/>} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
