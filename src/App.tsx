import React, { useCallback, useEffect } from 'react'
import './App.css'
import logo from './logo.svg'

const useKeyboard = (keys: string[], onKeyDown: (key: string) => void): void => {
  useEffect(() => {
    const cb = (event: KeyboardEvent): void => {
      const keyName = event.key
      if (keys.includes(keyName)) {
        onKeyDown(keyName)
      }
    }
    document.addEventListener('keydown', cb)
    return (): void => {
      document.removeEventListener('keydown', cb)
    }
  }, [keys, onKeyDown])
}

const App: React.FC = () => {
  const keys = ['A', 'B', 'C']
  const onKeyDown = useCallback(key => console.log({ key }), [])

  useKeyboard(keys, onKeyDown)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
