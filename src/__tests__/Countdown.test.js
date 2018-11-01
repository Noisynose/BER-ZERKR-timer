import React from 'react';
import renderer from 'react-test-renderer';
import Countdown from '../Countdown';

jest.useFakeTimers();

describe('Countdown component', () => {
    it('renders without crashing', () => {
        const countdownRender = renderer.create(<Countdown />);
        countdownRender.unmount();
    });

    it('renders correctly', () => {
        const countdownRender = renderer.create(<Countdown />);
        const countdown = countdownRender.toJSON();

        expect(countdown).toMatchSnapshot();
    });

    it('shows up as finished once countdown is done', () => {
        const countdownRender = renderer.create(
            <Countdown milliseconds="1000" />
        );
        const countdownInstance = countdownRender.getInstance();

        expect(countdownInstance.state.status).toBe("RUNNING");

        jest.advanceTimersByTime(500);
        expect(countdownInstance.state.status).toBe("RUNNING");

        jest.runAllTimers();
        expect(countdownInstance.state.status).toBe("FINISHED");

        jest.clearAllTimers();
        countdownRender.unmount();
    });
});