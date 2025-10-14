import { useEffect, useState } from "react";

/**
 * Custom hook to check if the client is mounted.
 *
 * @returns {UseIsClientReturn} - True if the client is mounted, false otherwise.
 *
 * @example
 * const isClient = useIsClient();
 *
 * return (
 *   <div>
 *     <p>Is Client: {isClient.toString()}</p>
 *   </div>
 * );
 */

type UseIsClientReturn = boolean;

function useIsClient(): UseIsClientReturn {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
}

export { useIsClient, type UseIsClientReturn };
