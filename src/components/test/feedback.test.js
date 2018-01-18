import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from '../feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Should render the feedback and return exact string value if key=0', () => {
    const _txtFeedback = "You are hot";
    const _guessCount = 0;
    const wrapper = shallow(<Feedback feedback={_txtFeedback} guessCount={_guessCount} />);
    expect(wrapper.text()).toEqual(_txtFeedback);
  });

  it('Should render the feedback and return exact string value if key!=0', () => {
    let guesses = [1,2,3,5,8,13,21];
    const _txtFeedback = "You are hot";
    const _guessAgain = " Guess again!"
    const _guessCount = guesses.length;
    const _expectedValue = `${_txtFeedback}${_guessAgain}`
    const wrapper = shallow(<Feedback feedback={_txtFeedback} guessCount={_guessCount} />);
    expect(wrapper.text()).toEqual(_expectedValue);
  });
})
