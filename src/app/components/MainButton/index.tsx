import {h, FunctionalComponent} from 'preact';
import {useState, useEffect} from 'preact/compat';
import {TRANSITIONAL_DURATION_FORM} from 'src/core/const/app';

import style from './style.less';
import cn from 'classnames';

interface IProps {
  onClick: VoidFunction;
}

export const MainButton: FunctionalComponent<IProps> = ({onClick}) => {
  const [isShow, setShow] = useState(false);
  const [isHide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), TRANSITIONAL_DURATION_FORM);
  }, []);

  const clickHandler = () => {
    setHide(true);
    onClick();
  };

  return (
    <tdiv
      className={cn(style.button, {[style.hide]: isHide, [style.show]: isShow})}
      onClick={clickHandler}
    >
      ?
    </tdiv>
  );
};
