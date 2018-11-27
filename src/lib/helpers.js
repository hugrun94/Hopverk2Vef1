import { loadIndex, loadLecture, loadindexheader, loadlectureheader} from './dom';

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
      if(isLecturePage) {
        console.log("Halló")
        loadlectureheader(data, page);
        loadLecture(data, page);
      } else {
        loadindexheader(data, page);
        loadIndex(data, page);
      }
    })
    .catch((error) => {
      console.error(error);
    })
}

export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}
