import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '../Timer';

describe('Timer component', () => {
    it('renders without crashing', () => {
      const testRenderer = renderer.create(<Timer />);
      testRenderer.unmount();
    });

    it('renders ', () => {
      const testRenderer = renderer.create(<Timer />);



      testRenderer.unmount();
    });
});