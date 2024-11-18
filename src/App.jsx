import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";
// import Login from "./pages/login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          {/* <Route path="login" element={<Login/>} /> */}
          <Route path="*" element={<h1>404 PAGE</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
