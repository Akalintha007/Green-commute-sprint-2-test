import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SideMenu from '.';
import { BrowserRouter } from 'react-router-dom';

function renderSideMenu() {
  render(<BrowserRouter>
  <SideMenu toggler={()=>{}}/>
  </BrowserRouter>);
}

describe('SideMenu', () => {
 
  test('Text should render correctly', () => {
    renderSideMenu();
    const textElement = screen.getByText('Saved Jobs');
    expect(textElement).toBeInTheDocument();
  });
  test('Text should render correctly', () => {
    renderSideMenu();
    const textElement = screen.getByText('Find Jobs');
    expect(textElement).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1001');
    expect(MenuItem).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1002');
    expect(MenuItem).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1003');
    expect(MenuItem).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1004');
    expect(MenuItem).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1005');
    expect(MenuItem).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1006');
    expect(MenuItem).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1007');
    expect(MenuItem).toBeInTheDocument();
  });
  test('MenuItem rendered correctly', () => {
    renderSideMenu();
    const MenuItem = screen.getByTestId('menuData1008');
    expect(MenuItem).toBeInTheDocument();
  });
});
