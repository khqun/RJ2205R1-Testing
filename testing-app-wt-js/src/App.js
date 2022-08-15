import './App.css';
import { useState } from 'react';
function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div id='count'>
        Count: {count}
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
          props.onChange(count + 1);
        }}
        id='buttonCLick'
      >Click me</button>
      <div>
        Hello Heroku
      </div>
    </div>
  );
}

export default App;
