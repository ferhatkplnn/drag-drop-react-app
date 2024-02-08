import { useState } from "react";
import DragDropList from "./pages/DragDropList";
import DragDropMultipleList from "./pages/DragDropMultipleList";

function App() {
  const [pageStatus, setPageStatus] = useState("");

  const singleDrag = () => {
    setPageStatus("single");
  };

  const multiDrag = () => {
    setPageStatus("multi");
  };
  return (
    <>
      <div className="nav">
        <a
          className={pageStatus === "single" ? "active" : ""}
          onClick={singleDrag}
        >
          DragDropList
        </a>
        <a
          className={pageStatus === "multi" ? "active" : ""}
          onClick={multiDrag}
        >
          DragDropMutlipleList
        </a>
      </div>

      {pageStatus === "single" && <DragDropList />}
      {pageStatus === "multi" && <DragDropMultipleList />}
    </>
  );
}

export default App;
