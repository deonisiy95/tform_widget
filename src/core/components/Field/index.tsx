import {h, FunctionalComponent, ComponentChildren} from 'preact';
import cn from 'classnames';
import style from './style.less';

interface IProps {
  title: string | ComponentChildren;
  text?: string;
  className?: string;
}

export const Field: FunctionalComponent<IProps> = props => {
  return (
    <tdiv className={cn(style.container, props.className)}>
      <tdiv className={style.title}>{props.title}</tdiv>
      {props.text && <tdiv className={style.description}>{props.text}</tdiv>}
      {props.children}
    </tdiv>
  );
};
