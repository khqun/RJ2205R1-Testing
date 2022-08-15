import React, { useState } from 'react';
const reactver = React.version;
function App() {
  return (
    <div>
      <button id='ClickMe' className='click-me'> Click Me</button>
      <h1>{reactver}</h1>
    </div>
  )
}

export default App;
