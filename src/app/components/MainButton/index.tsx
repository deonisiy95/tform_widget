import {h, FunctionalComponent} from 'preact';
import {useState, useEffect} from 'preact/compat';

import style from './style.less';
import cn from 'classnames';

interface IProps {
  onClick: VoidFunction;
}

export const MainButton: FunctionalComponent<IProps> = ({onClick}) => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <tdiv className={cn(style.button, {[style.show]: isShow})} onClick={onClick}>
      ?
    </tdiv>
  );
};
