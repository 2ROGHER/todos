import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

/**
 * useFetch
 * @description Custom hook to fetch paginated data from an API endpoint.
 * It supports loading, error handling, and generic typing for fetched data.
 *
 * @template T - The expected data type for the response.
 * @param endpoint - The API endpoint URL.
 * @param page - Current page number (pagination).
 * @param size - Number of items per page (pagination).
 *
 * @returns Object with data, loading, error, and a refetch function.
 */
// export const useFetch = <T>(endpoint: string, page: number, size: number) => {
//   const [data, setData] = useState<T[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response: AxiosResponse<T[]> = await axios.get(endpoint, {
//         params: { page, size },
//       });
//       setData(response.data); // set the data at the state by the response data
//     } catch (err) {
//       const axiosError = err as AxiosError;
//       console.error("Fetch error:", axiosError);

//       if (axiosError.response) {
//         // Server responded with a status other than 2xx
//         setError(
//           `Error ${axiosError.response.status}: ${axiosError.response.statusText}`
//         );
//       } else if (axiosError.request) {
//         // No response was received
//         setError("No response from server. Please check your network.");
//       } else {
//         // Other errors
//         setError("An unexpected error occurred.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   }, [endpoint, page, size]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return { data, loading, error, refetch: fetchData };
// };
