/* eslint-disable consistent-return */
/* eslint-disable no-useless-escape */
export default class Validator {
  constructor() {
    this.validName = null;
  }

  validateUsername(name) {
    if (/[\w\d\-\_]$/g.test(name) && !/^[\d+-_]|[\d+-_]$/.test(name) && !/\d{4}/.test(name)) {
      // eslint-disable-next-line no-return-assign
      return this.validName = name;
    }
    throw new Error('Имя не должно начинаться и заканчиваться с цифр, -, _, не должно иметь 3 подряд цифры');
  }
}

console.log(new Validator().validateUsername('gleb'));
