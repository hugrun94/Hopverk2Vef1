import { empty, loadData, el } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load(isLecturePage, page) {
  	console.log("fda");
    const data = loadData(isLecturePage, page);

  }
}