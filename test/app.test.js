// src/Counter.test.js or tests/Counter.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter'; // Replace with your actual component path

describe('Counter Component', () => {
  test('renders initial counter value', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('increments counter value when button is clicked', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Increment/i);
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText(/Counter: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  // Add more tests 