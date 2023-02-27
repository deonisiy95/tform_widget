import {h, FunctionalComponent} from 'preact';

import style from './style.less';

interface IProps {
  onClick: VoidFunction;
}

export const MainButton: FunctionalComponent<IProps> = ({onClick}) => {
  return (
    <tdiv className={style.button} onClick={onClick}>
      ?
    </tdiv>
  );
};
