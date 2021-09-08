import React from "react";
import todoItemList from "../todoItemList";

function TodoItem(props) {
    return (
        <div className="single-box">
            <input type="checkbox" checked={props.completed} />
            <p>{props.text}</p>
        </div>
    );
}

export default TodoItem;
