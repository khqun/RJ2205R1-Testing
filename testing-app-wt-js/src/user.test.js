import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User from "./user"

let container
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null
});
it("render user data", async () => {
    const fakeUser = {
        name: "Joni Baez",
        age: "32",
        address: "1 tc"
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        }));

    await act(async () => {
        render(<User id="123" />, container);
    });
    console.log(container);
    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age)
})


