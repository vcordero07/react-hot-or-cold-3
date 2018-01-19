import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from '../status-section';


describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    const guesses = [1,2,3,4,5];
    const guessCount = guesses.length;
    const auralStatus = "This is a string";
    shallow(<StatusSection
      GuessCount guessCount={guessCount}
      GuessList guesses={guesses}
      AuralStatus auralStatus={auralStatus}
       />);
  });
})
