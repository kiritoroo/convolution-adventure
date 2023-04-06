import Hogan from 'hogan.js';

import myTemplatePath from './template.mustache';

async function loadTemplate(path: string): Promise<Hogan.Template> {
  const res = await fetch(path);
  const templateText = await res.text();
  return Hogan.compile(templateText);
}

const myTemplate = await loadTemplate(myTemplatePath);

const data = {
    title: 'My List',
    items: [
      { name: 'Item 1', value: 'Value 1' },
      { name: 'Item 2', value: 'Value 2' },
      { name: 'Item 3', value: 'Value 3' },
    ],
  };
  
const html = myTemplate.render(data);

document.getElementById('my-container')!.innerHTML = html;
