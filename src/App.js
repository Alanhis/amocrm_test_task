import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import FisrtTask from './pages/first_task';
import MainPage from "./pages/main";
import SecondTask from './pages/second_task';

function App() {
  return (
    <>

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="firsttask" element={<FisrtTask />} />
        <Route path="secondtask" element={<SecondTask />} />
      </Routes>
    </>
  );
}

export default App;
