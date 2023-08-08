import { useState } from "react";

export const useList = (arr: number[]) => {
  const [list, setList] = useState<number[]>(arr);
  const push = (value: number): void => {
    list.push(value);
    setList([...list]);
  };

  const pop = (): void => {
    list.pop();
    setList([...list]);
  };

  const clear = (): void => {
    setList([]);
  };

  const reset = (): void => {
    setList([1, 2, 3]);
  };

  const map = () => {
    setList(list.map((el) => el * 2));
  };

  return [list, { push, pop, clear, reset, map }];
};
