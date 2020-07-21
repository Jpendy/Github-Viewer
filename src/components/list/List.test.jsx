import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List repoList={[{ thing1: 'thing' }, { thing1: 'thing' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
