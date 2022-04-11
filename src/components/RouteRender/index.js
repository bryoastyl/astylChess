import React from 'react'
import css from './RouteRender.module.css'
import Viewer from '../Viewer'
import Notifications from '../Notifications'

function index({Route}) {
    if(Route === "Notifications"){
        return (
            <Notifications />
        )
    }
    else if(Route === "Board"){
        return(
            <Viewer />
        )
    }
    return (
        <div className={css.Container}>
            <h3>Nothing Here</h3>
        </div>
    )
}

export default index
