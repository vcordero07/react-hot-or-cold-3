import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from '../guess-list';


describe('<GuessList />', () => {
  it('Should render GuessList given an Array{guesses}', () => {
    const guesses = [1,2,3,5,8,13,21];
    shallow(<GuessList guesses={guesses}/>);
  });

  it('Should return an Array list of gueeses', () => {
    const guesses = [1,2,3,5,8,13,21];
    const _nGuesses = guesses.join('');
    const wrapper = shallow(<GuessList guesses={guesses} />);
    expect(wrapper.text()).toEqual(_nGuesses);
  });
})
