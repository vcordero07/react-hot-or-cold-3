import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from '../aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Should render a Paragraph with the string value', () => {
    const _auralTxtStatus = "This is a string";
    const wrapper = shallow(<AuralStatus auralStatus={_auralTxtStatus} />);
    expect(wrapper.text()).toEqual(_auralTxtStatus);
  });
})
