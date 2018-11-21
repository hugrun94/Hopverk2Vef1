import List from './lib/list';
//import { loadLectureList } from './lib/dom';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  const list = new List();
  const data = list.load(isLecturePage, page);
});


