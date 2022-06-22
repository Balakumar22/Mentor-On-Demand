import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home/Home.Page";
import Filter from "./router/Filter/Filter.Page";
import Navigation from "./router/Navigation/Navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/filter/*" element={<Filter />} />
      </Route>
    </Routes>
    // <Home />
  );
}

export default App;
