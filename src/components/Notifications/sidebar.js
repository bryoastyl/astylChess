import React from 'react'
import css from './notifications.module.css'
import MailIcon from '@material-ui/icons/Mail'
import Friends from '@material-ui/icons/Group'
import Social from '@material-ui/icons/Instagram'
import News from '@material-ui/icons/Announcement'
import Account from '@material-ui/icons/Contacts'


function sidebar() {
    return (
        <div className={css.sidebar}>
            <div className={css.SidebarItem}>
                <MailIcon />
                <h4>Messages</h4>
            </div>
            <div className={css.SidebarItem}>
                <Friends />
                <h4>Challenges</h4>
            </div>
            <div className={css.SidebarItem}>
                <Social />
                <h4>Social</h4>
            </div>
            <div className={css.SidebarItem}>
                <News />
                <h4>News</h4>
            </div>
            <div className={css.SidebarItem}>
                <Account />
                <h4>Account</h4>
            </div>
        </div>
    )
}

export default sidebar
