import React, { useState } from "react";
import "./App.css";
import AddPage from "./components/AddPage/AddPage";
import AddForm from "./components/AddForm/AddForm";
import ShowData from "./components/DataShow/ShowData";
function App() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [viewPage, setViewPage] = useState(false);

  const toggleAddFormVisibility = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  const toggleDataShow = () => {
    setViewPage(!viewPage);
  };
  return (
    <React.Fragment>
      <AddPage onShowAddForm={toggleAddFormVisibility} />

      {isAddFormVisible && (
        <AddForm
          onShowAddForm={toggleAddFormVisibility}
          onShowData={toggleDataShow}
        />
      )}

      {viewPage && <ShowData onShowData={toggleDataShow} />}
    </React.Fragment>
  );
}

export default App;
