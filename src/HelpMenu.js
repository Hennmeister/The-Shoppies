import { Button, Typography } from '@material-ui/core'
import React from 'react'
import classes from './HelpMenu.module.css'

export default function HelpMenu(props) {
    return (
        <div className={classes.container}>
            <Typography variant="h3" color="textPrimary">
                Welcome to the Shoppies!
            </Typography>
            <Typography variant="h6" color="secondary">
                Search for movies and nominate up to 5 of your favourites.
            </Typography>
            <Button
                onClick={() => props.toggleActive(false)}
                color="secondary"
                variant="outlined"
            >
                Got it!
            </Button>
        </div>
    )
}
