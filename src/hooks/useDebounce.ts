import React, { useEffect, useState } from "react";


export default function useDebounce<T>(value: T, delay?:number) : T {
  const [debouncedValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    // set up some delay to update the debouncedValue
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // if the value has been updated, then timmr will be cleaned,
    // if can handle the both cases, triggered or not triggered.
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
