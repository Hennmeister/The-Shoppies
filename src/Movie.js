import React from 'react'
import classes from './Movie.module.css'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default function Movie(props) {
    return (
        <ButtonBase disableRipple={true} className={classes.movie}>
            {props.posterLink !== 'N/A' ? (
                <img
                    className={classes.poster}
                    src={props.posterLink}
                    alt="Movie Poster"
                />
            ) : null}
            <div className={classes.info}>
                <Typography
                    variant="h6"
                    style={{
                        paddingBottom: '10px',
                        lineHeight: 1.2,
                        paddingTop: '4vh',
                        fontSize: '4em',
                    }}
                >
                    {props.title}
                </Typography>
                {!props.showAll ? (
                    <Typography>{`Release Year: ${props.year}`}</Typography>
                ) : null}
                <Button
                    disabled={props.isNominationDisabled}
                    onClick={props.onClick}
                    style={{ fontSize: 'inherit' }}
                    variant="outlined"
                    color="primary"
                    className={classes.nominationButton}
                >
                    {props.btnText}
                </Button>
            </div>
        </ButtonBase>
    )
}
