import React from 'react';

const Todo = (props) => {
    const {title, id} = props.todo;
    const todoStyle = {backgroundColor: 'yellow', margin: '20px',padding: '20px'};
    return (
        <div style= {todoStyle}>
            <h3>title: {title}</h3>
            <h5>id: {id}</h5>
        </div>
    );
};

export default Todo;