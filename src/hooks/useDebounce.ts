import { useEffect, useState } from "react";

/**
 * Custom hook to debounce a value.
 *
 * @param {string} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds to debounce the value.
 *
 * @returns {UseDebounceReturn} - The debounced value.
 *
 * @example
 * const debouncedValue = useDebounce("Hello", 1000);
 *
 * return (
 *   <div>
 *     <p>Debounced Value: {debouncedValue}</p>
 *   </div>
 * );
 */

type UseDebounceReturn = string;

function useDebounce(value: string, delay: number): UseDebounceReturn {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce, type UseDebounceReturn };
