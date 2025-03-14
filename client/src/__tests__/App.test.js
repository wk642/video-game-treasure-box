import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; 

describe('App Button on the bottom would initiate the form', () => {
  test('opens the add Game form when the add button is clicked', async () => {
    render(<App />);

    // Wait for the add button to load
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /pluscircledicon/i })).toBeInTheDocument();
    }, { timeout: 5000 });

    // Click the add button
    fireEvent.click(screen.getByRole('button', { name: /pluscircledicon/i }));
    
    // Check for a button inside the form.
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /add game/i })).toBeInTheDocument(); 
    }, { timeout: 5000 });
  });
});