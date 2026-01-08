import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Home from "./pages/Portfolio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

/*
      <Route path="/" element={<Navigate to="/Portfolio" replace/>}/>
*/
