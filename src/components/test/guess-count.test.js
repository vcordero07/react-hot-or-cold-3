import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from '../guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Should render the GuessCount and return exact guessCount', () => {
    const _guessCount = 11;
    const _guessCountTxt = `You've made ${_guessCount} guesses!`
    const wrapper = shallow(<GuessCount guessCount={_guessCount} />);
    expect(wrapper.text()).toEqual(_guessCountTxt);
  });
})
