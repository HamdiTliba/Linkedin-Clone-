import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
