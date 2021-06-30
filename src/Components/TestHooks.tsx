import * as React from "react";
import {useState} from "react";

function TestHooks() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState(window.localStorage.getItem('name') || null);

  const changeName = (name: string) => {
    window.localStorage.setItem('name', name);
    setName(name);
  }

  return (
    <>
      <div data-testid={'countvalue'}>{counter}</div>
      <button data-testid={'incrementButton'} onClick={() => {
        setCounter((c) => c + 1)
      }}/>
      <button data-testid={'decrementButton'} onClick={() => {
        setCounter((c) => c - 1)
      }}/>
      <div data-testid={'namevalue'}>{name}</div>

      <input data-testid={'inputName'} onChange={(e) => {changeName(e.target.value)}}/>
      <button data-testid={'submitRefButton'} />
    </>
  );
}

export default TestHooks;
