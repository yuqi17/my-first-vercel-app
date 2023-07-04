import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    window.addEventListener('message', e => {
      if (e.data.scrollHeight) {
        console.log(e.data.scrollHeight, '<<<')
        setHeight(e.data.scrollHeight)
      }
    })
  }, [])

  return (
    <div className="App">
      <div className='block red'>

      </div>
      <div className='block blue'>

      </div>

      <iframe height={height} src='https://my-second-vercel-app.vercel.app/'>
        asdfasdf
      </iframe>
    </div>
  );
}

export default App;