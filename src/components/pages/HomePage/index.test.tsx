import { render, screen} from "@testing-library/react"
import HomePage from "../../pages/HomePage"
import { BrowserRouter } from 'react-router-dom';

describe('Home Page test', () => {
    test('Testing the home template', () => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        expect(screen.getByTestId('home-template')).toBeInTheDocument();
        
    })
})