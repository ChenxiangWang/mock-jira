import { useState } from "react";

/**
 *  a hook to manipulate array
 * */ 

export default function useArray<T>(arr: T[]) {
  const [array, setArray] = useState(arr);
  const clear = () => setArray([]);
  const removeIndex = (index: number) => {
    setArray(array.filter((v,i) => i !== index  ));
  }
  const add = (item: T) => {
    return setArray(prv => [...prv, item]);
  }
  return {array,setArray, clear, removeIndex, add};
}