import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/"/>
          <Route element={<RegisterPage/>} path="/Register" />
          <Route element={<LoginPage/>} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
