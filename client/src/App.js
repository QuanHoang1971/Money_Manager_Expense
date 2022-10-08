import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

// App là nơi điều hướng Route
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// nếu ko phải là data money-user thì sẽ ko vào đc trang home, vào login page
// nếu getItem money-user đc thì mới return props.childern ở Default Layout
export function ProtectedRoute(props) {
  if (localStorage.getItem("money-user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default App;
