import { useCallback, useEffect, useState } from 'react';

const EMPTY_ARRAY = [];

export function useUnmount(fn) {
  useEffect(() => fn, EMPTY_ARRAY);
}

export function useForceUpdate() {
  const [, setTick] = useState(0);

  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, []);

  return update;
}

export function model(input, key) {
  return e => {
    input[key] = e.target.value;
  };
}
