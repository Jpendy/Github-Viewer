import React from 'react';
import { shallow } from 'enzyme';
import ShortForm from './ShortForm';

describe('ShortForm component', () => {
  it('renders ShortForm', () => {
    const wrapper = shallow(<ShortForm userName='sampleUserName' onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
