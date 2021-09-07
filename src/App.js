import React from "react";
import Checklist from "./components/Checklist";
import "./style.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="main">
            <Header />
            <Checklist />
        </div>
    );
}

export default App;
