import List from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
  	console.log("er ég her?")

  } else {
  	console.log("fer ég hingað?")
    const list = new List();
    list.load();
  }
});
