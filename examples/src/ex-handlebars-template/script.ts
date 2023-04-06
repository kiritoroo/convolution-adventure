import Handlebars from 'handlebars';
import myTemplatePath from './template.handlebars';
const myTemplate = await fetch(myTemplatePath).then((res) => res.text());

console.log(myTemplate);

const data = { title: 'Hello, world!' };
const template = Handlebars.compile(myTemplate);
const templateOutput = template(data);

document.getElementById('my-container')!.innerHTML = templateOutput;