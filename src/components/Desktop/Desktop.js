import React, { useState } from 'react';

import WindowManager from '../WindowManager/WindowManager'
import Taskbar from '../Taskbar/Taskbar'

import './Desktop.css'

function Desktop() {
    const [apps, setApps] = useState([
        { id: 'internet', title: 'Internet', icon: 'globe-alt', hasDesktopIcon: true, isOpen: true, isVisible: false },
        { id: 'documents', title: 'Documents', icon: 'folder', hasDesktopIcon: true, isOpen: true, isVisible: true }
    ])

    function onAppTaskbarClick(appId) {
        const app = apps.find(a => a.id === appId)
        const newApp = {
            ...app,
            isVisible: !app.isVisible
        }

        setApps(
            apps.map(a => a.id === appId ? newApp : a)
        )
    }


    return (
        <div className="Desktop">
            <WindowManager apps={apps} />
            <Taskbar apps={apps} onAppTaskbarClick={onAppTaskbarClick} />
        </div>
    );
}

export default Desktop;
