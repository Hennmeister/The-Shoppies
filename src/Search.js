import React, { useContext } from 'react'
import { MovieContext } from './movie-context'
import Input from './Input'
import axios from 'axios'
import MovieCarousel from './MovieCarousel'

export default function Search() {
    const [searchTitle, updateSearchTitle] = React.useState('')
    const [prevSearchTitle, updatePrevSearchTitle] = React.useState('')
    const [searchResults, updateSearchResults] = React.useState([])
    const [pageNumber, updatePageNumber] = React.useState(1)
    const [numResults, updateNumResults] = React.useState(0)
    const [selectedIndex, updateIndex] = React.useState(0)
    const [titleText, updateTitleText] = React.useState('')

    const { nominatedMovies, setNominatedMovies } = useContext(MovieContext)

    const incrementScrollPosition = () => {
        updateIndex((prev) => Math.min(searchResults.length - 3, prev + 1))
        if (searchResults.length - selectedIndex < 15) {
            sendSearchQuery(true)
        }
    }

    const decrementScrollPosition = () => {
        updateIndex((prev) => Math.max(0, prev - 1))
    }

    const onMovieClick = (movie) => {
        setNominatedMovies((prev) => [...prev, movie])
    }

    const sendSearchQuery = (appendResults) => {
        if (numResults / 10 + 1 >= pageNumber) {
            axios
                .get(
                    appendResults
                        ? `http://www.omdbapi.com/?s=${prevSearchTitle}&type=movie&page=${pageNumber}&apikey=58992cd9`
                        : `http://www.omdbapi.com/?s=${searchTitle}&type=movie&page=1&apikey=58992cd9`
                )
                .then((response) => {
                    const newMovieEntries = []
                    for (const key in response.data.Search) {
                        newMovieEntries.push(response.data.Search[key])
                    }
                    if (appendResults) {
                        updateSearchResults((prev) => [
                            ...prev,
                            ...newMovieEntries,
                        ])
                    } else {
                        updateSearchResults((prev) => [...newMovieEntries])
                        updateIndex(0)
                        updatePrevSearchTitle(searchTitle)
                        updatePageNumber(1)
                    }
                    updateNumResults(Number(response.data['totalResults']))
                    updatePageNumber((prev) => prev + 1)
                    if (searchResults.length === 0) {
                        updateTitleText('No Results')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const canNominateMovie = (movie) =>
        nominatedMovies.some(
            (nomination) => movie.imdbID === nomination.imdbID
        ) || nominatedMovies.length >= 5

    return (
        <>
            <div>
                <MovieCarousel
                    onMovieClick={onMovieClick}
                    movies={searchResults.slice(
                        selectedIndex,
                        Math.min(selectedIndex + 3, searchResults.length)
                    )}
                    decrementScroll={decrementScrollPosition}
                    incrementScroll={incrementScrollPosition}
                    btnText={'NOMINATE'}
                    isMovieDisabled={canNominateMovie}
                    titleText={titleText}
                    input={searchTitle}
                    label={'Search Results'}
                    showAll={false}
                ></MovieCarousel>
            </div>
            <Input
                input={searchTitle}
                sendQuery={() => sendSearchQuery(false)}
                onInputChanged={updateSearchTitle}
            />
        </>
    )
}
