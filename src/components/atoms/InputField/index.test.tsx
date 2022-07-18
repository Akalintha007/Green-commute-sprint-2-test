import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import InputComponent from '.';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

function renderInputField () {
  render(
    <InputComponent
      placeholder={'Search by job location'}
      handleClick={handleClick}
      handleDelete={handleDelete}
      values={["Hyderabad"]}
      eventHandler={function (location: string[]): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
}

describe('Atoms', () => {
  it('InputField snapshot', () => {
    const tree = renderer
    .create(<InputComponent
      placeholder={'Search by job location'}
      handleClick={handleClick}
      handleDelete={handleDelete}
      eventHandler={function (location: string[]): void {
        throw new Error('Function not implemented.');
      }}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});
  test('renders input field', () => {
    renderInputField();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('renders chips', () => {
    renderInputField();
    const chipItem = screen.getByTestId('chip-item');
    expect(chipItem).toBeInTheDocument();
  });

  test('renders delete button on chip', () => {
    renderInputField();
    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeInTheDocument();
  })
});
