import React from 'react'
import { render, cleanup } from 'react-testing-library'; 
import MovieDetail from './MovieDetail';

afterEach( () => {
    cleanup
    console.error.mockClear()
})

console.error = jest.fn()

test('<MovieDetail />' , () => {
  const {debug}  = render(<MovieDetail match={match}/>)
});



