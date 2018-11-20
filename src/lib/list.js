import { empty } from './helpers';
import lec from '../../lectures.json'

export default class List {

const fs = require('fs');

let rawdata = fs.readFileSync('../../lectures.json');  
console.log(rawdata)

	const lecture = {
		slug: '',
      	title: '',
      	category: 'html',
      	image: '',
      	thumbnail: '',
      	content: [] 
	}

	const lectureContent = {
		type: '',
		data: ''
	}

  constructor() {
  	console.log("er ehv að gerast")
    this.container = document.querySelector('.list');
  }


  load() {
  	constructor();
  	console.log(lecture)
    //empty(this.container);


  }

}
