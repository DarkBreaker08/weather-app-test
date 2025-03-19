import { useState } from "react";

export const useApi = <T>() => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const error = useState("");

  const get = async (url: string) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: T = await response.json();
        setData(data);
      } else {
        const apiError: string = await response.text();
        throw new Error(apiError);
      }
    } catch (e) {
      throw new Error(e as string);
    }

    setLoading(false);
  };

  return { data, loading, error, get };
};
