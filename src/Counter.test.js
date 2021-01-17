import React from 'react'
import { render, fireEvent} from 'react-testing-library'; //Added FireEvent from React Testing Library
import Counter from './Counter';

test('<Counter />', () => {
  const { debug, getByTestId } = render(<Counter />);
  const counterButton = getByTestId('counter-button')
  debug();
  expect(counterButton.tagName).toBe('BUTTON');
  expect(counterButton.textContent).toBe('0');
  fireEvent.click(counterButton) //sends a click to the counter button
  expect(counterButton.textContent).toBe('1'); //expect it to be one after the first click.
  fireEvent.click(counterButton) //sends another click to the counter button
  expect(counterButton.textContent).toBe('2'); //expect it to be two after the second click
});