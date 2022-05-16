import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    // basename="{process.env.PUBLIC_URL}"
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id}`}
          element={<Detail />}
        ></Route>
        <Route path={`${process.env.PUBLIC_URL}`} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
