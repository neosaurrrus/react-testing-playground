import React from 'react'
import { render, cleanup, waitForElement, getAllByTestId} from 'react-testing-library'; 
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach( () => {
    cleanup
    console.error.mockClear()
})

console.error = jest.fn()

const match = {
    params: {
        id: 'abc1234567'
    }
}

const movie = {
    id: 123,
    title: '1984'
}
test('<MovieDetail />' , async () => {
  fetch.mockResponseOnce(JSON.stringify(movie))
  const {getByTestId, debug}  = render(<MovieDetail match={match}/>)
  await waitForElement(() => getByTestId('movie-title'))
  expect(getByTestId('movie-title').textContent).toBe(movie.title)
});



