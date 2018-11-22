import {
  el
} from './helpers';

export function loadIndex(data, page) {

    // finna út hvað er valið efst
    const lectures = page.querySelector('.lectures');
    console.log(data)

    var buttondiv = document.createElement("div");
    //Búa til button fyrir HTML
    var button1 = document.createElement("button");
    var texti1 = document.createTextNode("HTML");
    button1.appendChild(texti1);
    buttondiv.appendChild(button1)

    //Bæta við event handler
    button1.addEventListener("HTML", function() {
    alert("Velja HTML");
  });

  //Búa til button fyrir CSS
  var button2 = document.createElement("button");
  var texti2 = document.createTextNode("CSS");
  button2.appendChild(texti2);
  buttondiv.appendChild(button2);

  //Bæta við event handler
  button2.addEventListener("CSS", function() {
    alert("Velja CSS"); 
});

  //Búa til button fyrir Javascript
  var button3 = document.createElement("button");
  var texti3 = document.createTextNode("JAVASCRIPT");
  button3.appendChild(texti3);
  buttondiv.appendChild(button3);

  //Bæta við event handler
  button3.addEventListener("JAVASCRIPT", function() {
    alert("Velja JAVASCRIPT");
  });
  buttondiv.setAttribute('class', 'button');
  document.body.appendChild(buttondiv);

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
