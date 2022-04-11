import React from 'react'
import css from './Header.module.css'
import SearchIcon from '@material-ui/icons/Search'
import FlashIcon from '@material-ui/icons/FlashOnSharp'
function Header({setRoute}) {
    return (
        <div className={css.Header}>
            <div className={css.Navigation}>
                <h3>Chess.Ke</h3>
                <div className={css.NavigationOptions}>
                    <h4 onClick={()=>{setRoute("Board")}} >GAMES</h4>
                    <h4>PLAYERS</h4>
                    <h4>SOCIAL</h4>
                    <h4 onClick={()=>{setRoute("Notifications")}}>NOTIFICATIONS</h4>
                </div>
            </div>
            <div className={css.UserWidgets}>
                <div className={css.Inputdiv}>
                    <input placeholder="Live Games,Players,Teachers and more" />
                    <div className={css.SearchIcon}>
                        <SearchIcon />
                    </div>
                </div>
                <div className={css.Languagediv}>
                    <h4>EN</h4>
                </div>
                <div className={css.Languagediv}>
                    <FlashIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
