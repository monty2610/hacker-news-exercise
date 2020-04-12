import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import AppProvider from '../AppProvider';
import AppComponent from '../App';

describe('App Component', () => {
  it('App component should render AppProvider', () => {
    const posts = [];
    const component = shallow(<AppComponent posts={posts} />);

    expect(component.is(AppProvider)).toBeTruthy();
  });

  it('App component should render correctly', () => {
    const posts = [];
    const tree = renderer.create(<AppComponent posts={posts} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
