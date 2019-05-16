import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

Enzyme.configure({ adapter: new Adapter() });
describe('Testing card component', () => {
  it('It creates a snapshot of the component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

});

/*
  This test creates a snapshot of the component render and then checks if the component matches the snapshot. 
*/