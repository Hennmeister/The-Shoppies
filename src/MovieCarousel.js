import React, { useContext } from 'react'
import { MovieContext } from './movie-context'
import classes from './Movie.module.css'
import Movie from './Movie'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

export default function MovieCarousel(props) {
    let carousel = (
        <Typography variant="h2" color="textPrimary">
            {props.titleText}
        </Typography>
    )
    if (props.movies.length > 0) {
        const movieList = props.movies.map((movie) => (
            <Movie
                isNominationDisabled={props.isMovieDisabled(movie)}
                title={movie['Title']}
                year={movie['Year']}
                posterLink={movie['Poster']}
                key={movie['imdbID']}
                onClick={() => props.onMovieClick(movie)}
                btnText={props.btnText}
                showAll={props.showAll}
            />
        ))
        carousel = (
            <>
                <Typography
                    color="textPrimary"
                    className={classes.label}
                    variant="h5"
                    style={!props.showAll ? { marginLeft: '4vw' } : null}
                >
                    {props.label}
                </Typography>
                <div
                    className={classes.carousel}
                    style={
                        props.showAll
                            ? { width: '98vw', fontSize: '1em' }
                            : null
                    }
                >
                    {!props.showAll ? (
                        <IconButton
                            onClick={props.decrementScroll}
                            color={'secondary'}
                            style={{ height: '50%' }}
                        >
                            <NavigateBeforeIcon />
                        </IconButton>
                    ) : null}
                    {movieList}{' '}
                    {!props.showAll ? (
                        <IconButton
                            onClick={props.incrementScroll}
                            color={'secondary'}
                            style={{ height: '50%' }}
                        >
                            <NavigateNextIcon />
                        </IconButton>
                    ) : null}
                </div>
            </>
        )
    }
    return carousel
}
