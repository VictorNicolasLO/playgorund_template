export class ServiceStore {
  store = {};

  get(Service): String;
}

export declare const serviceStore: ServiceStore;

export declare function injectService(Service): serviceStore.get;
