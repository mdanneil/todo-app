import React from "react";
import TodoItem from "./TodoItem";

function Checklist() {
    return (
        <div className="checklist">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default Checklist;
