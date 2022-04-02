import React from 'react'
import css from './Viewer.module.css'
import ConnectBoard from '../Board'
import DataBoard from '../Databoard'
import Chat from '../Chat'

function index() {
    return (
        <div className={css.Viewer}>
            <DataBoard />
            <ConnectBoard />
            <Chat />
        </div>
    )
}

export default index
