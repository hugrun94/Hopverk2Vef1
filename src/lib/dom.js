import {
  el
} from './helpers';

export function loadIndex(data, page) {

    // finna út hvað er valið efst
    const lectures = page.querySelector('.lectures');
    console.log(data)

  for (const i in data.lectures) {
    let lecture = data.lectures[i];

    const element = el('section');

    if (lecture.thumbnail) {
        const img = el('img');
        img.classList.add('lectures__img');
        img.setAttribute('src', lecture.thumbnail);
        element.appendChild(img);
    }

    const cat = el('h2', lecture.category);
    cat.classList.add('lectures__category');
    element.appendChild(cat);


    const title = el('h1', lecture.title);
    title.classList.add('lectures__title');

    const check = el('img');
    check.classList.add('lectures__checkbox');
    check.classList.add('lectures__checkbox--hidden');
    check.setAttribute('src','img/check.png');

    const wrap = el('div',title,check);
    wrap.classList.add('lectures__titlewrap');

    element.appendChild(wrap);
    element.classList.add('lectures__section');
    lectures.appendChild(element);
  }
}

export function loadLecture(data) {
  console.log("lecture");
  console.log(data);
}