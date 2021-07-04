import useCounter from "./useCounter";
import {act, renderHook} from "@testing-library/react-hooks";

describe('the useCounter hook works correctly', () => {
  it('should increment counter', () => {
    const {result, rerender} = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should reset the counter to the initial value', () => {
    let initialValue = 0;
    const {result, rerender} = renderHook(() => useCounter(initialValue));

    initialValue = 10;
    rerender();

    act(() => {
      result.current.reset()
    });

    expect(result.current.count).toBe(10);
  });
});
