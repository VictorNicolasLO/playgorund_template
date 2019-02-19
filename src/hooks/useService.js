import React, { useRef, useState } from 'react';
import { useUnmount } from './utils';
import { observerStore } from './ObserverStore';

function useService(Service) {
  const [state, setState] = useState();

  const store = observerStore.getService(Service);
  if (!store.listeners.includes(setState)) {
    store.listeners.push(setState);
  }
  useUnmount(() => {
    store.listeners = store.listeners.filter(setter => setter !== setState);
  });

  if (state) {
    return state.service;
  } else {
    return store.service;
  }
}

export default useService;
