import React from 'react'
import css from './Chat.module.css'
import SendIcon from '@material-ui/icons/Send'
function index() {
    return (
        <div className={css.container}>
            <div className={css.Header}>
                <img alt="loading" src={"data:image/jpeg;base64,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"} />
                <div className={css.UserDetails}>
                    <h4>Emmanuel698</h4>
                    <p>Online</p>
                </div>
            </div>
            <div className={css.Textarea}>
                <input placeholder={"Message"} />
                <div className={css.SendIcon}>
                    <SendIcon />
                </div>
            </div>
        </div>
    )
}

export default index
