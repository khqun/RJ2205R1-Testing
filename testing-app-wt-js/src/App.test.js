import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import App from './App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null
})
it('change value when clicked', () => {
  const onChange = jest.fn();
  act(() => {
    render(<App onChange={onChange} />, container);
  });
  const button = document.getElementById('buttonCLick');
  expect(button.innerHTML).toBe('Click me');
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(document.getElementById('count').innerHTML).toBe('Count: 1');
  act(() => {
    for (let i = 0; i < 2; i++) {
      button.dispatchEvent(new MouseEvent("click", {
        bubbles: true
      }))
    }
  });
  expect(onChange).toHaveBeenCalledTimes(3);
  
});


