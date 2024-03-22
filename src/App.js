import React, { useState } from "react";
import "./App.css";
import AddPage from "./components/AddPage/AddPage";
import AddForm from "./components/AddForm/AddForm";

function App() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const toggleAddFormVisibility = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  return (
    <React.Fragment>
      <AddPage onShowAddForm={toggleAddFormVisibility} />
      {isAddFormVisible && <AddForm onShowAddForm={toggleAddFormVisibility} />}
    </React.Fragment>
  );
}

export default App;
