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

export function models(Target) {
  return class Result extends Target {
    models = {};
    constructor(config) {
      super(config);
      for (let i in this) {
        this.models[i] = e => {
          this[i] = e.target.value;
        };
      }
    }
  };
}
