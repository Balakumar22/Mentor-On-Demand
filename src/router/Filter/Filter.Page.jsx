import { Route, Routes } from "react-router";
import FilterHeader from "../../Components/FilterHeader";
import "./Filter.style.css";

const Filter = () => {
  return (
    <Routes>
      <Route path=":category" element={<FilterHeader />} />
    </Routes>
  );
};

export default Filter;
