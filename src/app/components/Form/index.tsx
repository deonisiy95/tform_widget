import {h, FunctionalComponent} from 'preact';
import {useIcon} from 'src/core/hooks/useIcon';

import style from './style.less';
import cn from 'classnames';

interface IProps {
  onClose: VoidFunction;
}

export const FormComponent: FunctionalComponent<IProps> = ({children, onClose}) => {
  const closeIcon = useIcon('close');

  return (
    <tdiv className={style.formWrapper}>
      <tdiv className={style.form}>{children}</tdiv>
      <div className={cn(style.close, closeIcon.style)} onClick={onClose} />
    </tdiv>
  );
};
