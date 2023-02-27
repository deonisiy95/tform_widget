import {h, Ref} from 'preact';
import {useCallback, forwardRef, HTMLAttributes} from 'preact/compat';
import cn from 'classnames';
import {JSXInternal} from 'preact/src/jsx';
import TargetedKeyboardEvent = JSXInternal.TargetedKeyboardEvent;
import style from './style.less';

export interface IProps extends HTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  onEnter?: (event: TargetedKeyboardEvent<HTMLTextAreaElement>) => void;
}

function Textarea(props: IProps, ref: Ref<HTMLTextAreaElement>) {
  const {invalid, onEnter, ...inputProps} = props;

  const onKeyPress = useCallback(
    event => {
      event.stopPropagation();

      if (onEnter && event.key === 'Enter') {
        onEnter(event);
      }
    },
    [onEnter]
  );

  return (
    <textarea
      ref={ref}
      className={cn(style.textarea, {
        [style.invalid]: Boolean(invalid)
      })}
      {...inputProps}
      onKeyPress={onEnter ? onKeyPress : null}
    />
  );
}

export default forwardRef(Textarea);
