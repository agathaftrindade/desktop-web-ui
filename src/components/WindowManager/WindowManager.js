import React from 'react';

import DesktopIcon from './DesktopIcon'
import AppWindow from './AppWindow'

import './WindowManager.scss'

function WindowManager(props) {
  return (
    <div className="WindowManager">
      {(props.apps || [])
        .filter(p => p.isVisible)
        .map(p => <AppWindow key={p.id} />)}

      {(props.apps || [])
        .filter(p => p.hasDesktopIcon)
        .map(p => <DesktopIcon key={p.id} title={p.title} icon={p.icon} />)}
    </div>
  );
}

export default WindowManager;
