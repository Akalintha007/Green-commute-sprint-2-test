import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SavedJobsPage from '.';
import { BrowserRouter } from 'react-router-dom';

function renderSavedJobsPage() {
  render(<BrowserRouter><SavedJobsPage /></BrowserRouter>);
}
describe('Saved Jobs Page', () => {
  it('Saved Jobs Page snapshot', () => {
    const tree = renderer.create(<BrowserRouter><SavedJobsPage /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders banner correctly', () => {
    renderSavedJobsPage();
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
  });

  test('Renders header images correctly', () => {
    renderSavedJobsPage();
    const images = screen.getAllByAltText('Logo');
    expect(images).toHaveLength(3);
  });

  test('Renders avatar correctly', () => {
    renderSavedJobsPage();
    const avatar = screen.getByAltText('user-profile');
    expect(avatar).toBeInTheDocument();
  });

  test('Renders textbox correctly', () => {
    renderSavedJobsPage();
    const textbox = screen.getByRole('textbox');
    expect(textbox).toHaveValue('Mumbai, MP, India');
  });

  test('Renders all menu items', () => {
    renderSavedJobsPage();
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(8);
  });
});
