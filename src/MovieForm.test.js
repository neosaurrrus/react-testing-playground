import React from 'react'
import { render, cleanup, fireEvent, getByLabelText} from 'react-testing-library'; 
import MovieForm from './MovieForm';

afterEach(cleanup)
const onSubmit = jest.fn(); //essentially a dummy or spy function

test('<MovieForm>', () => {
  const {debug, getByText, queryByTestId, getByLabelText} = render(<MovieForm submitForm={onSubmit} />) //Adding the getByLabelText

  //Unit Tests to check elements exist
  expect(queryByTestId('movie-form')).toBeTruthy()
  expect(queryByTestId('movie-form').tagName).toBe('FORM')
  expect(getByText('Submit').tagName).toBe('BUTTON')
  expect(getByLabelText('Title').tagName).toBe('INPUT') //test to make sure the input is there
  
  //change the input value
  fireEvent.change(getByLabelText('Title'), {target: {value: "Girl, Woman, Other"}}) //This event sets the value of the input and lets the change affect the state. 

  //Check Form Submits as expected
  fireEvent.click(getByText('Submit'))
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({title: 'Girl, Woman, Other'}) //This checks that the submission has the title we asked it to have earlier.
  debug()
});