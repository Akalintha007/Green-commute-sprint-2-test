import ReactTestRenderer from 'react-test-renderer';
import HomePage from '.';
import Header from '../../organisms/Header';
import TypographyComponent from '../../atoms/Typography';
import SideMenu from '../../organisms/SideMenu';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage template', () => {
  it('renders Home page', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
      <HomePage
        header={<Header userLocation='East Maredpally' />}
        sideMenu={<SideMenu toggler={()=>{}}/>}
        children={<TypographyComponent>HomePage</TypographyComponent>}
      />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
