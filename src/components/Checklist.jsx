import React from "react";
import TodoItem from "./TodoItem";
import todoItemList from "../todoItemList";

function Checklist() {
    const itemList = todoItemList.map((item) => (
        <TodoItem key={item.id} text={item.text} completed={item.completed} />
    ));

    return <div className="checklist">{itemList}</div>;
}

export default Checklist;
