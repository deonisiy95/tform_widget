import {h} from 'preact';
import {forwardRef, HTMLAttributes} from 'preact/compat';
import {generateId} from 'src/core/utils/string';
import cn from 'classnames';
import style from './style.less';

export interface IProps extends HTMLAttributes<HTMLInputElement> {
  inactive?: boolean;
}

const CheckboxComponent = (props: IProps, ref) => {
  const {className, children, inactive, ...checkBoxProps} = props;

  const uuid = generateId();

  return (
    <tdiv className={cn(style.root, className, {[style.inactive]: inactive})}>
      <input
        id={uuid}
        ref={ref}
        type='checkbox'
        className={style.checkbox}
        {...checkBoxProps}
        disabled={inactive || checkBoxProps.disabled}
      />
      <label htmlFor={uuid}>
        <tdiv className={style.marker} />
      </label>

      <label className={style.label} htmlFor={uuid}>
        {children}
      </label>
    </tdiv>
  );
};

export const CheckBox = forwardRef(CheckboxComponent);
