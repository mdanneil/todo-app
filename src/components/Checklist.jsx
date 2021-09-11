import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoItemList from "../todoItemList";

class Checklist extends Component {
    constructor() {
        super();
        this.state = {
            todos: todoItemList,
        };
    }

    render() {
        const itemList = this.state.todos.map((item) => (
            <TodoItem
                key={item.id}
                text={item.text}
                completed={item.completed}
            />
        ));

        return <div className="checklist">{itemList}</div>;
    }
}

export default Checklist;
