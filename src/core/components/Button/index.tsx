import {h, FunctionalComponent} from 'preact';
import cn from 'classnames';
import style from './style.less';

interface IProps {
  onClick: Function;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'light' | 'azure';
  className?: string;
  isLoad?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  noFull?: boolean;
}

export const Button: FunctionalComponent<IProps> = props => {
  return (
    <tdiv className={cn(style.container, props.className)}>
      {props.isLoad && <tdiv className={style.loader} />}
      <button
        className={cn(
          style.button,
          style[`button-${props.color ?? 'primary'}`],
          style[`button-${props.size ?? 'md'}`],
          {
            [style.rounded]: props.rounded,
            [style.noFull]: props.noFull
          }
        )}
        disabled={props.disabled || props.isLoad}
        onClick={() => props.onClick()}
      >
        <tdiv
          className={cn(style.text, {
            [style.hidden]: props.isLoad
          })}
        >
          {props.children}
        </tdiv>
      </button>
    </tdiv>
  );
};
