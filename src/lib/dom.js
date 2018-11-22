import {
  el
} from './helpers';


export function loadIndex(data, page) {

    // finna út hvað er valið efst
    const lectures = page.querySelector('.lectures');
    console.log(lectures)
    console.log(data)

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
    element.classList.add('lectures__section');
    link.appendChild(element);
    lectures.appendChild(link);

    console.log(element)


  }
}

export function loadLecture(data, page) {
    const lecturepage = page.querySelector('.lecture');
    console.log(lecturepage)

    const url = new URL(window.location.href);
    const slug = url.searchParams.get('slug');
   
    let lecture;
    console.log(data.lectures[0].slug)
    for(let i in data.lectures){
        if(data.lectures[i].slug === slug){
            lecture = data.lectures[i];
        }
    }
    const lec = lecture.content;
    for(let i in lec){
        console.log(lec[i].type)
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
            const imag = el('img', lec[i].data);
            imag.classList.add('lecture__image');
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


}





