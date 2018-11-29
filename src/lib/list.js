import { loadData } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load(isLecturePage, page) {
    loadData(isLecturePage, page);
  }
}