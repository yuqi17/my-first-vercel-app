import './App.css';
import { useState, useEffect } from 'react';
import inobounce from 'inobounce'

function App() {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    console.log(inobounce.isEnabled(), 'isEnabled 0')
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
        <button onClick={() => {
          inobounce.enable()
          console.log(inobounce.isEnabled(), 'isEnabled 1 ')
        }}>inobounce.enable</button>

        <button onClick={() => {
          inobounce.disable()
          console.log(inobounce.isEnabled(), 'isEnabled 2')
        }}>inobounce.disable</button>
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