import {
  el
} from './helpers';


export function loadIndex(data, page) {
  // finna út hvað er valið efst
  const lectures = page.querySelector('.lectures');

  const buttondiv = el('div')
  //Búa til button fyrir HTML
  const button1 = el('button')
  const texti1 = document.createTextNode("HTML");
  button1.appendChild(texti1);

  //Bæta við event handler
  button1.addEventListener("click", () => {
    isClicked(data,page,'html');
  });

  //Búa til button fyrir CSS
  const button2 = el('button')
  const texti2 = document.createTextNode("CSS");
  button2.appendChild(texti2);

  //Bæta við event handler
  button2.addEventListener("click", () => {
    isClicked(data,page,'css');
  });

  //Búa til button fyrir Javascript
  const button3 = el('button')
  const texti3 = document.createTextNode("JAVASCRIPT");
  button3.appendChild(texti3);

  //Bæta við event handler
  button3.addEventListener("click", () => {
    isClicked(data,page,'javascript');
  });

  buttondiv.appendChild(button1);
  buttondiv.appendChild(button2);
  buttondiv.appendChild(button3);
  buttondiv.setAttribute('class', 'button');
  lectures.appendChild(buttondiv);

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

    const wrap = el('div',title,check);
    wrap.classList.add('lectures__titlewrap');

    element.appendChild(wrap);
    element.classList.add(''+ data.lectures[i].category);
    link.appendChild(element);
    lectures.appendChild(link);
  }

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
      const youtube = el('p',el('a',lec[i].data));
      youtube.classList.add('lecture__youtube');
      lecturepage.appendChild(youtube);
    }else if(lec[i].type === 'text'){
      const text = el('p', lec[i].data);
      text.classList.add('lecture__text');
      lecturepage.appendChild(text);
    }else if(lec[i].type === 'quote'){
      const quote = el('div', el('p', lec[i].data));
      quote.classList.add('lecture__quote');
      lecturepage.appendChild(quote);
    }else if(lec[i].type === 'image'){
      const imag = el('img', '');
      imag.classList.add('lecture__image');
      imag.setAttribute('src', lec[i].data)
      imag.setAttribute('alt', lec[i].caption)
      lecturepage.appendChild(imag);
    }else if(lec[i].type === 'heading'){
      const head = el('h1', lec[i].data);
      head.classList.add('lecture__heading');
      lecturepage.appendChild(head);
    }else if(lec[i].type === 'list'){
      const ul = el('ul')
      ul.classList.add('lecture__ul');
      for(let j in lec[j]){
        const li = el('li', lec[j].data);
        li.classList.add('lecture__li');
        lecturepage.appendChild(li);
      }
    }else if(lec[i].type === 'code'){
      const code = el('code', lec[i].data);
      code.classList.add('lecture__code');
      lecturepage.appendChild(code);
    } 
  }
  const backdiv = el('div');
    //Búa til button fyrir að fara til baka
    const back = el('button')
    const textback = document.createTextNode("Til Baka");
    back.appendChild(textback);
    //Bæta við event handler
    back.addEventListener("click", () => {
      isClicked(data,page,'til baka');
    });

  const finishdiv = el('div')
  //Búa til button fyrir að merkja við kláraðan fyrirlestur
  const finished = el('button')
  const textfinish = document.createTextNode("Kláraður fyrirlestur");
  finished.appendChild(textfinish);
  //Bæta við event handler
  finished.addEventListener("click", () => {
    isClicked(data,page,'Klárað');
  });

  backdiv.appendChild(back);
  finishdiv.appendChild(finished);


   //Búa til div til að halda utanum báða takkana 
   const bothbuttons = el('div')
   bothbuttons.appendChild(backdiv);
   bothbuttons.appendChild(finishdiv);
   lecturepage.appendChild(bothbuttons)



   //Setja button undir lecture
   

 }

 function isClicked(data, page, tegund){
  let element = document.getElementsByClassName(tegund);
  for(let j = 0; j<element.length;j++){
    console.log(element[j].classList.value)
    if (element[j].classList) { 
      element[j].classList.toggle("hidden");
    } else {
      let classes = element[j].className.split(" ");
      let i = classes.indexOf("hidden");

      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("mystyle");
      element.className = classes.join(" "); 
    }
  }
} 
