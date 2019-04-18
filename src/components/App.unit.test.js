import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
});
