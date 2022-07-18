import { render, screen } from '@testing-library/react';
import JobDescriptionView from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Home Page test', () => {
  test('render the components', () => {
    render(<BrowserRouter>
    <JobDescriptionView />
    </BrowserRouter>);

    expect(screen.getAllByAltText('Logo')).toHaveLength(3);
    expect(screen.getAllByRole('menuitem')).toHaveLength(8);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
