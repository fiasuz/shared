import { useEffect, useState } from "react";

/**
 * Options for the useDebounce hook.
 */
type UseDebounceOptions = {
  /**
   * If true, the initial value will be set immediately without waiting for the delay.
   * If false, the debounced value will be undefined until the delay has passed.
   * @default false
   */
  leading?: boolean;
};

/**
 * Custom hook to debounce a value.
 *
 * @param {T} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds to debounce the value.
 * @param {UseDebounceOptions} options - Optional configuration for the debounce behavior.
 *
 * @returns {T | undefined} - The debounced value (undefined until delay passes if leading is false).
 *
 * @example
 * // Debounce without initial value (recommended for search inputs)
 * const debouncedSearch = useDebounce(searchTerm, 500);
 *
 * @example
 * // Debounce with immediate initial value
 * const debouncedSearch = useDebounce(searchTerm, 500, { leading: true });
 *
 * return (
 *   <div>
 *     <input onChange={(e) => setSearchTerm(e.target.value)} />
 *     <p>Debounced: {debouncedSearch || 'Waiting...'}</p>
 *   </div>
 * );
 */

type UseDebounceReturn<T> = T | undefined;

function useDebounce<T = string>(
  value: T,
  delay: number,
  options: UseDebounceOptions = {}
): UseDebounceReturn<T> {
  const { leading = false } = options;
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(
    leading ? value : undefined
  );

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce, type UseDebounceReturn, type UseDebounceOptions };
