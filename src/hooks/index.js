import React, { memo } from 'react';
//import { observer } from 'mobx-react';
import { observer } from 'mobx-react-lite';

class ServiceStore {
  store = {};

  create = Service => {
    this.store[Service] = new Service();
    return this.store[Service];
  };

  get = Service => {
    if (this.store[Service]) {
      return this.store[Service];
    } else return this.create(Service);
  };
}

export const component = Target => {
  return observer(Target);
};

export const serviceStore = new ServiceStore();

export const injectService = serviceStore.get;
