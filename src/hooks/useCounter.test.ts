import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from './useCounter'

test('useCounter', () => {
  const { result } = renderHook(() => useCounter())
  expect(result.current.count).toBe(0)

  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
})
