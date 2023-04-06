import { css } from '@emotion/css';

const styles = css`
  color: blue;
  font-size: 16px;
  padding: 8px;
`;

const content = `
  Hello   
`

const container = document.getElementById('my-container')!
container.innerHTML = content;
container.classList.add(styles)