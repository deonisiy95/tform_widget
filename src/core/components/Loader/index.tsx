import {h, FunctionalComponent} from 'preact';
import cn from 'classnames';

import style from './style.less';

interface IProps {
  className?: string;
}

export const Loader: FunctionalComponent<IProps> = props => {
  return <tdiv className={cn(style.container, props.className)} />;
};
