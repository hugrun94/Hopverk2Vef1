import {
  loadIndex, loadLecture, loadindexheader, loadlectureheader,
} from './dom';

export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function loadData(isLecturePage, page) {
  fetch('lectures.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Villa kom upp');
    })
    .then((data) => {
      if (isLecturePage) {
        loadlectureheader(data, page);
        loadLecture(data, page);
      } else {
        loadindexheader(data, page);
        loadIndex(data, page);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}