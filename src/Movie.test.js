import React from 'react'
import { render, cleanup } from 'react-testing-library'; 
import Movie from './Movie';
import {MemoryRouter } from 'react-router-dom'

afterEach( () => {
    cleanup
    console.error.mockClear()
})

console.error = jest.fn()

test('<Movie> with no props' , () => {
  render(
      <MemoryRouter>
           <Movie />
      </MemoryRouter>
   
  )
    expect(console.error).toBeCalled()
});


const movie = {
    id: "123",
    title: "I am a bear",
    poster_path: "Hello"
}

test('<Movie> with props' , () => {
    const {getByTestId} = render(
        <MemoryRouter>
             <Movie />
        </MemoryRouter>
     
    )
    expect(console.error).not.toBeCalled()

});