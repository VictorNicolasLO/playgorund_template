import { observable, action, decorate, computed } from 'mobx';

export class ServiceTest {
  nameV = 'John';
  age = 42;
  showAge = true;
  obj = {
    n: 'asd'
  };
  get name() {
    return this.showAge ? `${this.nameV} (age: ${this.age})` : this.nameV;
  }

  fn = () => {
    this.nameV = 'asdfasfd' + this.nameV;
  };
}
decorate(ServiceTest, {
  nameV: observable,
  age: observable,
  obj: observable,
  showAge: observable,
  name: computed,
  fn: action
});
