import React from 'react';

export default function Todo(props) {
  return(
    <div className="todo">
      { (props.index + 1) + '. ' + props.text }
    </div>
  );
}