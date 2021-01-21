import React from 'react'
import { render, cleanup, waitForElement, fireEvent, getByTestId} from 'react-testing-library'; 
import MoviesList from './MoviesList';
import {MemoryRouter } from 'react-router-dom'

global.fetch = require('jest-fetch-mock');

afterEach( () => {
    cleanup
    console.error.mockClear()
})

console.error = jest.fn()

const movies = {
    results: [{id: 123,
    title: '1984', poster_path: 'awefe.jpg'}]
}



test('<MoviesList />' , async () => {
  fetch.mockResponseOnce(JSON.stringify(movies))
  const {getByTestId, debug}  = render(
    <MemoryRouter>
        <MoviesList/>
    </MemoryRouter>)

  await waitForElement(() => getByTestId('movie-link'))
  debug()
  expect(getByTestId('movie-title').getAttribute('href')).toBe(movies.results.id)
});



