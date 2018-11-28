import {
  el
} from './helpers';

 
export function loadIndex(data, page) {
  // finna út hvað er valið efst
  const lectures = page.querySelector('.lectures');

  const buttondiv = el('div')
  //Búa til button fyrir HTML
  const button1 = el('button');
  button1.classList.add("HTML");
  const texti1 = document.createTextNode("HTML");
  button1.appendChild(texti1);

  //Bæta við event handler
  button1.addEventListener("click", () => {
    if(button1.className == "HTML"){
      button1.className += "--toggled";
    } else button1.className = "HTML";

    isClicked(data,page,'html');
  });

  //Búa til button fyrir CSS
  const button2 = el('button')
  button2.classList.add("CSS");
  const texti2 = document.createTextNode("CSS");
  button2.appendChild(texti2);

  //Bæta við event handler
  button2.addEventListener("click", () => {
    if(button2.className == "CSS"){
      button2.className += "--toggled";
        } else button2.className = "CSS";
    isClicked(data,page,'css');
  });

  //Búa til button fyrir Javascript
  const button3 = el('button')
  button3.classList.add("JAVASCRIPT");
  const texti3 = document.createTextNode("JAVASCRIPT");
  button3.appendChild(texti3);

  //Bæta við event handler
  button3.addEventListener("click", () => {
    if(button3.className == "JAVASCRIPT"){
      button3.className += "--toggled";
    } else button3.className = "JAVASCRIPT";
    isClicked(data,page,'javascript');
  });

  buttondiv.appendChild(button1);
  buttondiv.appendChild(button2);
  buttondiv.appendChild(button3);
  buttondiv.setAttribute('class', 'button');
  document.body.appendChild(buttondiv);

  for (const i in data.lectures) {
    let lecture = data.lectures[i];

    const sl = lecture.slug;
    const link = el('a');
    link.href=`/fyrirlestur.html?slug=${sl}`;
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
    if(localStorage.getItem(sl) == 'complete'){
      check.classList = 'lectures__checkbox';
    }

    const wrap = el('div',title,check);
    wrap.classList.add('lectures__titlewrap');

    element.appendChild(wrap);
    link.classList.add(''+ data.lectures[i].category);
    link.classList.add(''+ 'hidden');
    link.appendChild(element);
    lectures.appendChild(link);
  }
}

export function loadlectureheader(data, page){
  const header = page.querySelector('.lectureheader');

  const url = new URL(window.location.href);
  const slug = url.searchParams.get('slug');


  let lecture;
  for(let i in data.lectures){
    if(data.lectures[i].slug === slug){
      lecture = data.lectures[i];
    }
  }

  const header__image= el('div');
  const codeimg = lecture.image;
  const headimg = el('img');
  if(lecture.image){
    headimg.setAttribute('src', lecture.image);
    header__image.setAttribute('class', 'lectureheader__image');
  }
  else{
    header__image.setAttribute('class', 'lectureheader__noimage');
  }
  headimg.setAttribute('class', 'lectureheader__img');
  header__image.appendChild(headimg);
  header.appendChild(header__image);

  const header__content = el('div');
  const head = lecture.title;
  const title = el('h1', head);
  const type = lecture.category;
  const cat = el('h3', type);
  header__content.appendChild(cat);
  header__content.appendChild(title);

  header__content.classList.add('lectureheader__content');
  header.appendChild(header__content);
}



export function loadindexheader(data, page){
  const header = page.querySelector('.indexheader');

  const url = new URL(window.location.href);
  const slug = url.searchParams.get('slug');


  let lecture;
  for(let i in data.lectures){
    if(data.lectures[i].slug === slug){
      lecture = data.lectures[i];
    }
  }
 const indexhead = el('div');
 const indeximg = el('img');
  indexhead.classList.add('indexheader__image');
  indeximg.setAttribute('class', 'indexheader__img');
  indeximg.setAttribute('src', 'img/header.jpg');
  indeximg.setAttribute('alt', ' ');
  indexhead.appendChild(indeximg);
  header.appendChild(indexhead); 

  const vef = el('h3');
  var veftext = document.createTextNode("Vefforritun");
  vef.appendChild(veftext);
  const fyrir = el('h1');
  var fyrirtext = document.createTextNode("Fyrirlestrar");
  fyrir.appendChild(fyrirtext);
  const cont = el('div');
  cont.classList.add("indexheader__content");
  cont.appendChild(vef);
  cont.appendChild(fyrir);
  header.appendChild(cont);

  /*const head = lecture.title;
  const title = el('h1', head);
  title.classList.add('header__content');
  header.appendChild(title);
  */
}

export function loadLecture(data, page) {
  const lecturepage = page.querySelector('.lecture');

  const url = new URL(window.location.href);
  const slug = url.searchParams.get('slug');


  let lecture;
  for(let i in data.lectures){
    if(data.lectures[i].slug === slug){
      lecture = data.lectures[i];
    }
  }
  const lec = lecture.content;
  for(let i in lec){
    if(lec[i].type === 'youtube'){
      const youtube = el('iframe','');
      youtube.setAttribute('src',lec[i].data)
      youtube.setAttribute('width','100%');
      youtube.setAttribute('height','420px');
      youtube.classList.add('lecture__youtube');
      lecturepage.appendChild(youtube);
    }else if(lec[i].type === 'text'){
      const substrings = lec[i].data.split(/\r?\n/);
      for(let k in substrings){
        const text = el('p', substrings[k]);
        text.classList.add('lecture__text');
        lecturepage.appendChild(text);
      }
    }else if(lec[i].type === 'quote'){
      const quote = el('blockquote', el('p', lec[i].data));
      const footer = el('footer', lec[i].attribute);
      quote.classList.add('lecture__quote');
      quote.appendChild(footer);
      lecturepage.appendChild(quote);
    }else if(lec[i].type === 'image'){
      const image = el('div');
      image.setAttribute('class', 'lecture__image')
      const img = el('img', '');
      img.classList.add('lecture__img');
      const imgcaption = el('footer', lec[i].caption)
      img.setAttribute('src', lec[i].data)
      img.setAttribute('alt', ' ')
      image.appendChild(img);
      image.appendChild(imgcaption);
      lecturepage.appendChild(image);

    }else if(lec[i].type === 'heading'){
      const head = el('h1', lec[i].data);
      head.classList.add('lecture__heading');
      lecturepage.appendChild(head);
    }else if(lec[i].type === 'list'){
      const liarray = lec[i].data;
      const ul = el('ul')
      ul.classList. add('lecture__ul');
      for(let j in liarray){
        console.log('j=',j,'liarray[j]=',liarray[j])
        const li = el('li', liarray[j]);
        li.classList.add('lecture__li');
        ul.appendChild(li);
      }
      lecturepage.appendChild(ul);
    }else if(lec[i].type === 'code'){
      // const code = el('code', lec[i].data);
      // code.classList.add('lecture__code');
      // lecturepage.appendChild(code);

      const substrings = lec[i].data.split(/\r?\n/);
      const codediv = el('div');
      codediv.setAttribute('class', 'lecture__code')
      for(let k in substrings){
        const text = el('p', substrings[k]);
        text.classList.add('lecture__code--p');
        codediv.appendChild(text);
      }
      lecturepage.appendChild(codediv);
    } 
  }

  //Búa til button fyrir að fara til baka
  const backdiv = el('div');
  backdiv.setAttribute('class', 'lecture__buttons__back');
  const back = el('button')
  const textback = document.createTextNode("Til Baka");
  const backlink = el('a');
  backlink.href=`../../index.html`;
  back.appendChild(textback);
  backlink.appendChild(back);
  backdiv.appendChild(backlink);

  //Búa til button fyrir að merkja við kláraðan fyrirlestur
  const finished = el('button')
  const check = el('img');
    check.classList.add('lectures__checkbox');
    check.classList.add('lectures__checkbox--hidden');
    check.setAttribute('src','img/check.png');
  const finishedDIV = el('div');
  if(localStorage.getItem(slug) == 'complete'){ 
    check.classList = 'checkbox';
    finished.setAttribute('class', 'lecture__buttons__finished--complete')
  }
  else{ 
    check.classList = 'checkbox--hidden';
    finished.setAttribute('class','lecture__buttons__finished');
  }
  const textfinish = document.createTextNode("Klára fyrirlestur");
  finished.appendChild(textfinish);
  finishedDIV.appendChild(check);
  finishedDIV.appendChild(finished);
  //Bæta við event handler
  finished.addEventListener("click", () => {
    if(localStorage.getItem(slug) == 'complete'){ 
      //breytum í 'not-finished'
      window.localStorage.setItem(slug, 'not-complete');
      finished.setAttribute('class','lecture__buttons__finished');
      check.classList = 'checkbox--hidden';

    }
    else{ 
      //setjum finished
      window.localStorage.setItem(slug, 'complete');
      finished.classList += '--complete';
      check.classList = 'checkbox';
    }
  });


   //Búa til div til að halda utanum báða takkana 
   const bothbuttons = el('div')
   bothbuttons.setAttribute('class', 'lecture__buttons');
   bothbuttons.appendChild(finishedDIV);
   bothbuttons.appendChild(backdiv);
   lecturepage.appendChild(bothbuttons);
 } 
 // loadLecture() endar



 function isClicked(data, page, tegund){
   let element = document.getElementsByClassName(tegund);
   for(let j=0; j<element.length; j++){
     if(element[j].classList.value == 'html'){
       element[j].classList.value = 'html hidden';
      }
      else if(element[j].classList.value == 'css'){
        element[j].classList.value = 'css hidden';
      }
      else if(element[j].classList.value == 'javascript'){
        element[j].classList.value = 'javascript hidden';
      }
      else if(element[j].classList.value == 'html hidden'){
        element[j].classList.value = 'html';
      }
      else if(element[j].classList.value == 'css hidden'){
        element[j].classList.value = 'css';
      }
      else if(element[j].classList.value == 'javascript hidden'){
        element[j].classList.value = 'javascript';
      }
    }
}


function save(slug){
  //const saved = window.localStorage.getItem('lecture');
  const div = document.querySelector('div');
  if (localStorage.getItem(slug) === null) {
    window.localStorage.setItem(slug, 'finished');

  }else{
    return;
  }
} 

