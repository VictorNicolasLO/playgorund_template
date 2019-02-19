import { reaction, autorun, toJS, keys, observable } from 'mobx';

class ObserverStore {
  store = {};

  createService(Service) {
    const service = new Service();

    const listeners = [];

    autorun(
      /* () => {
        JSON.stringify(service);
      },*/
      () => {
        console.log('run ', service);
        const newState = { service };
        const json = JSON.stringify(service);
        listeners.forEach(setState => {
          setState(newState);
        });
      }
    );
    this.store[Service] = {
      listeners,
      service
    };

    return this.store[Service];
  }

  getService(Service) {
    if (this.store[Service]) {
      return this.store[Service];
    } else return this.createService(Service);
  }
}

export const observerStore = new ObserverStore();
