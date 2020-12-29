import React, { createContext, useState } from 'react'

export const MovieContext = createContext(undefined)

export const Provider = (props) => {
    const storedNominations = JSON.parse(localStorage.getItem('nominations'))
    const [nominatedMovies, setNominatedMovies] = useState(
        storedNominations ? storedNominations : []
    )
    const movieContext = {
        nominatedMovies,
        setNominatedMovies,
    }

    return (
        <MovieContext.Provider value={movieContext}>
            {props.children}
        </MovieContext.Provider>
    )
}
