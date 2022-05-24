import {h, render} from 'preact';
import App from './app/components/Hello';

const getPageWindow = () => {
  return window.parent || window;
};

const _window = getPageWindow();
const _body = _window.document.body;
const rootContainer = _window.document.createElement('tdiv');
console.log(_window, _body);
_body.appendChild(rootContainer);

render(<App />, rootContainer);
