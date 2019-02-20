import { observable, action, decorate, computed } from 'mobx';
import { injectService } from './hooks';
import { ServiceTest } from './ServiceTest';
import { model } from './hooks/utils';

class ServiceTestClass {
  @observable nameV = 'John cena';
  @observable age = 42;
  @observable showAge = true;
  @observable obj = {
    n: 'asd'
  };

  constructor() {
    /*setInterval(() => {
      this.age = this.age + 55;
    }, 2000);*/
  }

  @observable items = ['1', '2', '3', '4'];

  @computed get name() {
    const sv2 = injectService(ServiceTest);
    return this.showAge
      ? `${this.nameV} (age: ${this.age + sv2.age})`
      : this.nameV;
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

export const ServiceTest2 = ServiceTestClass;
