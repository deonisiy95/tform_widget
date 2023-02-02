import {h, Ref} from 'preact';
import {useCallback, forwardRef, HTMLAttributes} from 'preact/compat';
import cn from 'classnames';
import {JSXInternal} from 'preact/src/jsx';
import TargetedKeyboardEvent = JSXInternal.TargetedKeyboardEvent;
import style from './style.less';

export interface IProps extends HTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  inline?: boolean;
  onEnter?: (event: TargetedKeyboardEvent<HTMLInputElement>) => void;
}

function Input(props: IProps, ref: Ref<HTMLInputElement>) {
  const {invalid, onEnter, inline, ...inputProps} = props;

  const onKeyPress = useCallback((event) => {
    event.stopPropagation();

    if (onEnter && event.key === 'Enter') {
      onEnter(event);
    }
  }, [onEnter]);

  return (
    <input
      ref={ref}
      className={cn(style.input, {
        [style.invalid]: Boolean(invalid),
        [style.inline]: Boolean(inline)
      })}
      onKeyPress={onEnter ? onKeyPress : null}
      {...inputProps}
    />
  );
}

export default forwardRef(Input);
