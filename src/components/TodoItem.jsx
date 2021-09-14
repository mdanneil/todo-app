import React from "react";

function TodoItem(props) {
    const styleIfCompleted = {
        fontStyle: "italic",
        backgroundColor: "green",
    };
    const styleIfIncomplete = {
        fontStyle: "normal",
        fontWeight: "500",
    };
    return (
        <div className="single-box">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p
                style={
                    props.item.completed ? styleIfCompleted : styleIfIncomplete
                }
            >
                {props.item.text}
            </p>
        </div>
    );
}

export default TodoItem;
