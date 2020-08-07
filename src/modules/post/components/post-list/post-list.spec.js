import React from 'react';
import { shallow } from 'enzyme';
import PostList from './post-list';

describe('post list componet', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      title: 'title',
      body: 'body',
    };
    wrapper = shallow(<PostList {...props} />);
  });

  it('should have title as title', () => {
    const title = wrapper.find('.post-list-title');
    expect(title.text()).toBe('title');
  });

  it('should have title as body', () => {
    const body = wrapper.find('.post-list-body');
    expect(body.text()).toBe('body');
  });
});
