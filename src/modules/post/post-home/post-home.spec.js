import React from 'react';
import { shallow } from 'enzyme';
import PostHome from './post-home';
import { findByTestAttr } from '../../../utils/test-helper';

describe('home component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostHome />);
  });

  it('home should have container', () => {
    const container = wrapper.find('.container');
    expect(container).toHaveLength(1);
  });

  it('should have title as post list', () => {
    const title = wrapper.find('.title');
    expect(title.text()).toBe('Post List');
  });

  it('should contain more than one post list', () => {
    const postList = wrapper.find(findByTestAttr('post-list'));
    expect(postList.length).toBeGreaterThanOrEqual(1);
  });
});
