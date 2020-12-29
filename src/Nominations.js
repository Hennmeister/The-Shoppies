import React, { useContext, useEffect } from 'react'
import { MovieContext } from './movie-context'
import MovieCarousel from './MovieCarousel'
import Banner from './Banner.js'

export default function Nominations(props) {
    const { nominatedMovies, setNominatedMovies } = useContext(MovieContext)

    useEffect(() => {
        localStorage.setItem('nominations', JSON.stringify(nominatedMovies))
    })

    const HandleMoviePress = (movie) => {
        const newNominations = nominatedMovies.filter(
            (nom) => nom.imdbID !== movie.imdbID
        )
        setNominatedMovies(newNominations)
    }
    return (
        <div>
            <MovieCarousel
                movies={nominatedMovies}
                btnText={'Remove from Nominations'}
                isMovieDisabled={() => false}
                label={`Nominations (${nominatedMovies.length})`}
                onMovieClick={HandleMoviePress}
                showAll={true}
            ></MovieCarousel>
            {nominatedMovies.length === 5 ? <Banner /> : null}
        </div>
    )
}
