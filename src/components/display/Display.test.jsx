import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders Display', () => {
    const wrapper = shallow(<Display name='sampleName' followerCount={1} followingCount={1} githubLink={'sample link'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
