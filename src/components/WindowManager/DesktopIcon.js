import React from 'react';

import './WindowManager.scss'

function DesktopIcon(props) {
  return (
    <div className="DesktopIcon">
      <div className="Icon">
        <i className={`gg-${props.icon}`}></i>
      </div>
      <div className="Text">{props.title}</div>
    </div>
  );
}

export default DesktopIcon;
