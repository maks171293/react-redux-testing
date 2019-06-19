import React from 'react';
import { shallow, mount } from 'enzyme';
import { createMount } from '@material-ui/core/test-utils';
import TextInput from './TextInput';
import sinon from 'sinon';

describe('TextInput', () => {
  let mounts: any;
  beforeAll(() => {
    mounts = createMount();
  })
  
  it('Renders input for text', () => {
    const input = shallow(<TextInput onChange={() => {}} text="query" />);
    expect(input).toMatchSnapshot();
  })

  it('renders value from props inside input', () => {
    const wrapper = mounts(<TextInput onChange={() => {}} text="query" />);
    const textField = wrapper.find("input").props().value;
    expect(textField).toEqual('query');
  })

  it('calls onChange callback on key press', () => {
    const spy = sinon.spy();
    const event = {target: {name: 'search', value: 'Mama'}}
    const wrapper = mount(<TextInput onChange={spy} text="" />);
    wrapper.find('input').simulate('change', event);
    expect(spy.calledOnce).toEqual(true);
  })
})