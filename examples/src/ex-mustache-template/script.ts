import * as Mustache from 'mustache';
import myTemplatePath from './template.mustache';
const myTemplate = await fetch(myTemplatePath).then((res) => res.text());

const data = {
  title: 'My Page',
  heading: 'Welcome to my page!',
  items: [
    { name: 'Item 1', value: '10' },
    { name: 'Item 2', value: '20' },
    { name: 'Item 3', value: '30' }
  ]
};

const rendered = Mustache.render(myTemplate, data);

document.getElementById('my-container')!.innerHTML = rendered;
