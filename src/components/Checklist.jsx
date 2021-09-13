import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoItemList from "../todoItemList";

class Checklist extends Component {
    constructor() {
        super();
        this.state = {
            todos: todoItemList,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.id.completed;
                }
                return todo;
            });
            return {
                todos: updatedTodos,
            };
        });
        console.log(id, "Checked");
    }

    render() {
        const itemList = this.state.todos.map((item) => (
            <TodoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />
        ));

        return <div className="checklist">{itemList}</div>;
    }
}

export default Checklist;
