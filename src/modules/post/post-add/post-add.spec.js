import React from 'react';
import { shallow } from 'enzyme';
import PostAdd from './post-add';

describe('post list componet', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostAdd />);
  });

  it('should have title as title', () => {
    const title = wrapper.find('.post-add-title');
    expect(title.text()).toBe('Post Add');
  });
});
