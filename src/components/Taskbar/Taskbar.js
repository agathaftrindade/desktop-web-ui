import React from 'react';
import './Taskbar.scss'

import TaskbarEntry from './TaskbarEntry'

function Taskbar(props) {
  const {apps, onAppTaskbarClick} = props
  return (
    <div className="Taskbar">
      {(apps || [])
        .filter(p => p.isOpen)
        .map(app => <TaskbarEntry 
                        key={app.id}
                        title={app.title} 
                        isVisible={app.isVisible}
                        onClick={() => onAppTaskbarClick(app.id)} />)}
    </div>
  );
}

export default Taskbar;
