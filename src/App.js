import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home.js";
import FormField from "./pages/formField/FormField.js";
import NotFound from "./pages/notFound/NotFound.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<FormField />} />

          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
