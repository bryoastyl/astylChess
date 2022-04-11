import React from 'react'
import css from './notifications.module.css'
import Sidebar from './sidebar'
import View from './view'

function index() {
    return (
        <div className={css.Container}>
            <Sidebar />
            <View />
        </div>
    )
}

export default index
