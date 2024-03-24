import React, { useState } from "react";
import "./App.css";
import AddPage from "./components/AddPage/AddPage";
import AddForm from "./components/AddForm/AddForm";
import ShowData from "./components/DataShow/ShowData";
function App() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [viewPage, setViewPage] = useState(false);

  return (
    <React.Fragment>
      <AddPage setIsAddFormVisible={setIsAddFormVisible} />

      {isAddFormVisible && (
        <AddForm
          setIsAddFormVisible={setIsAddFormVisible}
          setViewPage={setViewPage}
        />
      )}

      {viewPage && <ShowData setViewPage={setViewPage} />}
    </React.Fragment>
  );
}

export default App;
