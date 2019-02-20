import { observable, action, decorate, computed } from 'mobx';
import { injectService } from './hooks';
import { ServiceTest2 } from './serviceTest2';
import { models } from './hooks/utils';

@models
class ServiceTestClass {
  @observable nameV = 'John';
  @observable age = 42;
  @observable showAge = true;
  @observable obj = {
    n: 'asd'
  };

  constructor() {
    this.anotherService = injectService(ServiceTest2);
  }

  @observable items = ['1', '2', '3', '4'];

  @computed get name() {
    return this.showAge ? `${this.nameV} (age: ${this.age})` : this.nameV;
  }

  @computed get nameWithAnotherService() {
    return this.anotherService.name + '   ' + this.name;
  }

  @action fn() {
    /*this.nameV = '0';
    this.age = 0;*/
    this.items.forEach((item, index) => {
      this.items[index] = index + item;
    });
    setTimeout(() => {
      this.items = [1, 1, 1, 1];
    }, 2000);
  }
}

export const ServiceTest = ServiceTestClass;
