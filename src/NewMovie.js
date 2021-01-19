import React, { Component } from 'react'
import MovieForm from './MovieForm'

export default class NewMovie extends Component {
    render() {
        return (
            <div>
                 <h1 data-testid='NewMovie-heading'>Enter a New Movie</h1>
                 <MovieForm data-testid="movie-form"/>
            </div>
        )
    }
}
