import {h, render} from 'preact';
import App from './app/controllers/App';

const getPageWindow = () => {
  return window.parent || window;
};

const _window = getPageWindow();
const _body = _window.document.body;
const _head = _window.document.head;
const rootContainer = _window.document.createElement('tdiv');
const link = _window.document.createElement('link');

link.rel = 'stylesheet';
link.href = 'http://127.0.0.1:3000/widget.css';

_head.appendChild(link);

_body.appendChild(rootContainer);

render(<App widgetId={window.widgetId} />, rootContainer);