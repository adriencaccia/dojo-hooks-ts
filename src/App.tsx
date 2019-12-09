import React, { useCallback, useEffect, useRef, useState } from 'react'
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

const useDebounce = (value: string, ms: number): string => {
  const [debouncedValue, setDebouncedValue] = useState('')
  const chrono = useRef<NodeJS.Timeout>()
  useEffect(() => {
    if (chrono.current != null) clearTimeout(chrono.current)
    chrono.current = setTimeout(() => setDebouncedValue(value), ms)
    return (): void => {
      if (chrono.current)
        clearTimeout(chrono.current)
    }
  }, [value, ms])
  return debouncedValue
}


const App: React.FC = () => {
  const keys = ['A', 'B', 'C']
  const onKeyDown = useCallback(key => console.log({ key }), [])

  useKeyboard(keys, onKeyDown)

  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

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
        <div>
          <input
            type="text"
            value={value}
            onChange={({ target }): void => setValue(target.value)}
          />
          <p>{ debouncedValue }</p>
        </div>
      </header>
    </div>
  )
}

export default App
