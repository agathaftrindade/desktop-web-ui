import React from 'react';
import './Taskbar.scss'

function TaskbarEntry(props) {
  const {isVisible, onClick} = props
  return (
    <div className={`TaskbarEntry ${isVisible? 'visible' : ''}`} onClick={onClick}>
      {props.title}
    </div>
  );
}

export default TaskbarEntry;
