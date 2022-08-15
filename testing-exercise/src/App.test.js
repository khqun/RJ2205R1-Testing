import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { getSum } from './App';
describe(App, () => {
  it("Can excute sum", () => {
    expect(getSum(1, 2)).toBe(3)
  })
  it("Have some element i want to render?", () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('value-one-input')).toBeInTheDocument();
    expect(queryByTestId('value-two-input')).toBeInTheDocument();
    expect(queryByTestId('button-add')).toBeInTheDocument();
    expect(queryByTestId('result')).toBeInTheDocument();
  })
  it("Button excute sum ?", () => {
    const { queryByTestId, getByTestId } = render(<App />);
    const increaseButton = getByTestId('button-add');
    const firstInput = getByTestId('value-one-input');
    const secInput = getByTestId('value-two-input');
    fireEvent.change(firstInput, { target: { value: 1 } });
    fireEvent.change(secInput,  { target: { value: 2 } });
    fireEvent.click(increaseButton);
    expect(queryByTestId('result').textContent).toBe("Result: 3" );
  })
})
