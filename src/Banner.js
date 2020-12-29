import React from 'react'
import Typography from '@material-ui/core/Typography'
import classes from './banner.module.css'

export default function Banner() {
    return (
        <div className={classes.banner}>
            <Typography color="textSecondary" variant={'subtitle2'}>
                You've completed your nomination list! Feel free to continue
                editing.
            </Typography>
        </div>
    )
}
