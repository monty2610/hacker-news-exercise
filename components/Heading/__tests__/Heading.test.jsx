import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../Heading';
import * as useApp from '../../App/useApp';

describe('Heading Component', () => {
  it('Heading component should render correctly', () => {
    jest.spyOn(useApp, 'useApp').mockImplementation(() => ({}));
    const tree = shallow(<Heading />);
    expect(tree).toMatchSnapshot();
  });
});
