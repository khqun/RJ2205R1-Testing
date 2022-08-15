import Counter from "./Counter";
import { render, fireEvent } from '@testing-library/react';

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={5} />);
        const countValue = Number(getByTestId(`count`).textContent);
        console.log(countValue);
        expect(countValue).toEqual(5);
    });
    it('can button make count + 1?', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementbtn = getByRole("button", { name: "Increment" });
        fireEvent.click(incrementbtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
    })
 
});