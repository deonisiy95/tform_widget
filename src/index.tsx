import {h, render} from 'preact';
import App from 'src/app/controllers/App';
import 'src/styles/global.less';
import style from 'src/styles/index.less';
import {widget_host} from './core/const/env';

const getPageWindow = () => {
  return window.parent || window;
};

const _window = getPageWindow();
const _body = _window.document.body;
const _head = _window.document.head;
const rootContainer = _window.document.createElement('tdiv');
const link = _window.document.createElement('link');

link.rel = 'stylesheet';
link.href = widget_host + '/widget.css';

rootContainer.classList.add(style.mainContainer);

_head.appendChild(link);

_body.appendChild(rootContainer);

render(<App widgetId={window.widgetId} />, rootContainer);
