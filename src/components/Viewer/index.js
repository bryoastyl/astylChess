import React from 'react'
import css from './Viewer.module.css'
import ConnectBoard from '../Board'
import  DataBoard from '../Databoard'

function index() {
    return (
        <div className={css.Viewer}>
            <DataBoard />
            <ConnectBoard />
            <DataBoard />
        </div>
    )
}

export default index
