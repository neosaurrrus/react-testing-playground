import React from 'react'
import { render, cleanup, fireEvent} from 'react-testing-library'; //Added FireEvent from React Testing Library
import NewMovie from './NewMovie';

afterEach(cleanup)

test('<NewMovie>', () => {
  const {debug, getByTestId, queryByTestId, container} = render(<NewMovie/>)
  debug()
  const NewMovieHeading = getByTestId('NewMovie-heading')
  expect(NewMovieHeading.textContent).toBe("Enter a New Movie")
  expect(NewMovieHeading.tagName).toBe("H1")
  //Check for Movie form
  
  expect(container.firstChild).toMatchSnapshot();
});