import { useState } from "react";

export const useCounter = (init: number) => {
  const [value, setValue] = useState(init);
  const inc = (num?: number) => {
    if (num) {
      setValue(value + num);
    } else {
      setValue(value + 1);
    }
  };
  const dec = (num?: number) => {
    if (num) {
      setValue(value - num);
    } else {
      setValue(value - 1);
    }
  };
  const set = (num: number) => {
    setValue(num);
  };

  return { value, inc, dec, set };
};
