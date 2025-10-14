import { useState, type Dispatch, type SetStateAction } from "react";

/**
 * Custom hook to manage a boolean state with utility functions to set it to true, false, or toggle its value.
 *
 * @param {boolean} [defaultValue=false] - The initial value of the boolean state.
 *
 * @returns {UseBooleanReturn} - An object with the boolean value and utility functions to set it to true, false, or toggle its value.
 *
 * @example
 * const { value, setTrue, setFalse, toggle } = useBoolean(false);
 *
 * return (
 *   <div>
 *     <p>Value: {value.toString()}</p>
 *     <button onClick={setTrue}>Set True</button>
 *     <button onClick={setFalse}>Set False</button>
 *     <button onClick={toggle}>Toggle</button>
 *   </div>
 * );
 */

type UseBooleanReturn = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

function useBoolean(initialValue: boolean): UseBooleanReturn {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, setValue, toggle, setTrue, setFalse };
}

export { useBoolean, type UseBooleanReturn };
