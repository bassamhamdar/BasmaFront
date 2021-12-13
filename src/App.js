import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { RegisterProvider } from "./Context/RegisterProvider";
function App() {
  return (
    <RegisterProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </RegisterProvider>
  );
}

export default App;
